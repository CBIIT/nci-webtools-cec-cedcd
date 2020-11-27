var express = require('express');
var router = express.Router();
var mysql = require('../components/mysql');
var logger = require('../components/logger');
var cache = require('../components/cache');
var fs = require('fs');

router.use((request, response, next) => {
    const { session } = request;
    if (process.env.NODE_ENV !== 'development' &&
        !/CohortAdmin|SystemAdmin/.test(session.role)) {
        response.status(400).json('Unauthorized').end();
    } else {
        next();
    }
});

router.post('/upload/:id/:category', async function (req, res, next) {
    let cohortFile = req.files.cohortFile
    //logger.debug(cohortFile.name)
    fs.access(`FileBank/CohortID_${req.params.id}`, (err) => {
        if (err) {
            fs.mkdirSync(`FileBank/CohortID_${req.params.id}`, { recursive: true }, (err) => {
                if (err) res.json({ status: 500 })
            });
            cohortFile.mv(`FileBank/CohortID_${req.params.id}/${cohortFile.name}`)
        }
        else
            cohortFile.mv(`FileBank/CohortID_${req.params.id}/${cohortFile.name}`)
    })
    let proc = 'add_file_attachment'
    let params = []
    params.push(req.params.id)
    params.push(req.params.category)
    params.push(cohortFile.name)
    mysql.callProcedure(proc, params, function (result) { })
    res.json({ status: 200 })
})

router.post('/update_cohort_basic/:id', function (req, res) {
    logger.debug(req.body)
    req.body.cohort_description = req.body.cohort_description.replace(/\n/g, '\\n')
    let body = JSON.stringify(req.body)
    let proc = 'update_cohort_basic'
    let params = []
    params.push(req.params.id)
    params.push(body)

    mysql.callJsonProcedure(proc, params, function (result) {
        if (result && result[0] && result[0][0].rowsAffacted > 0)
            res.json({ status: 200, message: 'update successful' })
        else
            res.json({ status: 500, message: 'update failed' })
    })

})

router.post('/cohort_basic_info/:id', function (req, res) {
    let id = req.params.id
    let func = 'get_cohort_basic_info'
    let params = [id]
    mysql.callProcedure(func, params, function (results) {
        //logger.debug(results)
        const basic_info = {}
        basic_info.investigators = []
        basic_info.cohort = results[0][0]
        basic_info.completer = results[1][0]
        basic_info.contacter = results[2][0]
        results[3].map((item) => {
            if (item.name) {
                basic_info.investigators.push(item)
            }
        })
        basic_info.collaborator = results[4][0]
        basic_info.sectionStatus = results[5]

        res.json({ status: 200, data: basic_info })
    })
})

router.post('/upload/files', function (req, res) {

})

router.post('/upsert_enrollment_counts/:id', function (req, res) {
    let body = JSON.stringify(req.body)
    let proc = 'upsert_enrollment_count'
    let params = []
    params.push(req.params.id)
    params.push(body)

    mysql.callJsonProcedure(proc, params, function (result) {
        if (result && result[0] && result[0][0].rowsAffacted > 0)
            res.json({ status: 200, message: 'update successful' })
        else
            res.json({ status: 500, message: 'update failed' })
    })

})

router.post('/enrollment_counts/:id', function (req, res) {
    let id = req.params.id
    let func = 'get_enrollment_counts'
    let params = []
    params.push(id)
    mysql.callProcedure(func, params, function (result) {
        logger.debug(typeof result[4][0].mostRecentDate)
        const enrollmentCounts = {}
        enrollmentCounts.details = result[0]
        enrollmentCounts.rowTotals = result[1]
        enrollmentCounts.colTotals = result[2]
        enrollmentCounts.grandTotal = result[3][0]
        enrollmentCounts.mostRecentDate = result[4][0]
        res.json({ data: enrollmentCounts })
    })

})

router.post('/major_content/:id', function (req, res) {
    let id = req.params.id
    let func = 'get_major_content'
    let params = []
    params.push(id)
    mysql.callProcedure(func, params, function (result) {
        //logger.debug(result)
        const majorContent = {}
        majorContent.counts = result[0]
        majorContent.cancerInfo = result[1][0]
        if (majorContent)
            res.json({ status: 200, data: majorContent })
        else
            res.json({ status: 500, message: 'failed to load data' })
    })
})

router.post('/update_major_content/:id', function (req, res) {
    let func = 'upsert_major_content'
    let body = JSON.stringify(req.body)
    let params = []
    params.push(req.params.id)
    params.push(body)
    logger.debug(body)

    mysql.callJsonProcedure(func, params, function (result) {
        logger.debug(result)
        if (result && result[0] && result[0][0].rowAffacted > 0)
            res.json({ status: 200, message: 'update successful' })
        else
            res.json({ status: 500, message: 'update failed' })
    })
})

router.post('/mortality/:id', function (req, res) {
    let id = req.params.id
    let func = 'select_mortality'
    let params = []
    params.push(id)
    mysql.callProcedure(func, params, function (result) {
        logger.debug(result)
        const mortality = {}
        mortality.info = result[0]
        mortality.completion = result[1]

        if (mortality)
            res.json({ status: 200, data: mortality })
        else
            res.json({ status: 500, message: 'failed to load data' })
    })
})

router.post('/update_mortality/:id', function (req, res) {
    let func = 'update_mortality'
    let body = JSON.stringify(req.body)
    let params = []
    params.push(req.params.id)
    params.push(body)
    logger.debug(body)

    mysql.callJsonProcedure(func, params, function (result) {
        logger.debug(result)
        if (result && result[0] && result[0][0].rowAffacted > 0)
            res.json({ status: 200, message: 'update successful' })
        else
            res.json({ status: 500, message: 'update failed' })
    })
});

const getTablesWithColumn = async (mysql, column) => {
    const tables = await mysql.query(
        `select distinct c.table_name as name
        from information_schema.COLUMNS c
            left join information_schema.tables t on (
                t.TABLE_NAME = c.TABLE_NAME and
                t.TABLE_SCHEMA = c.TABLE_SCHEMA
            )
        where 
            c.COLUMN_NAME = ? and 
            t.TABLE_TYPE != 'VIEW'`,
        column
    );
    return tables.map(t => t.name);
};

router.get('/cohort/:id(\\d+)', async (request, response) => {
    const { app, session, params } = request;
    const { mysql } = app.locals;
    const { id } = params;
    try {

        const [cohort] = await mysql.query(`SELECT * FROM cohort WHERE id = ?`, id);

        if (!cohort)
            throw new Error(`Invalid cohort: ${id}`);

        // only allow SystemAdmins to administer user mapping roles
        const restrictedTables = process.env.NODE_ENV === 'development' || /SystemAdmin/.test(session.user.role)
            ? []
            : ['cohort_user_mapping'];

        // look for tables with references to cohort(cohort_id)
        const tables = (await getTablesWithColumn(mysql, 'cohort_id')).filter(t => 
            !restrictedTables.includes(t)
        );
 
        for (let table of tables) {
            cohort[table] = await mysql.query(
                `SELECT * FROM ?? WHERE cohort_id = ?`,
                [table, id]
            );
        }

        response.json(cohort);
    } catch (e) {
        logger.error(e);
        response.status(500).json({ message: 'Could not fetch cohort' });
    }
});

router.post('/cohort(/:id(\\d+))?', async (request, response) => {
    const { app, session, params, body } = request;
    const { mysql } = app.locals;
    let id = params ? params.id : undefined; // can be undefined (for new cohorts)

    // todo: only allow the CohortAdmin for this specific cohort to post to this route
    const authenticated = true;
    
    if (!authenticated)
        throw new Error('Unauthorized');

    try {
        // only allow SystemAdmins to administer user mapping roles
        // todo: store table-specific acl rules in the database
        const restrictedTables = process.env.NODE_ENV === 'development' || /SystemAdmin/.test(session.user.role)
            ? []
            : ['cohort_user_mapping'];

        // look for tables with references to cohort(cohort_id)
        const tables = (await getTablesWithColumn(mysql, 'cohort_id')).filter(t => 
            !restrictedTables.includes(t)
        );

        const results = await mysql.upsert({ 
            table: 'cohort', 
            record: {
                ...body, 
                id: id || undefined,
                create_time: undefined,
                update_time: new Date(),
                publish_by: session.user ? session.user.id : undefined,
            }
        });

        // if inserting a new cohort, preserve the insertId
        if (id === undefined && results.insertId)
            id = results.insertId;

        // if a related table is provided, replace all records for the specified cohort
        for (const table of tables) {
            let records = body[table] || [];
            if (!Array.isArray(records))
                records = [records];

            if (records.length) {
                // remove existing records for the current table
                await mysql.query(
                    `DELETE FROM ?? WHERE cohort_id = ?`,
                    [table, id]
                );

                // insert replacement records
                for (const record of records) {
                    await mysql.upsert({ 
                        table, 
                        record: {
                            ...record, 
                            id: undefined,
                            cohort_id: id,
                            create_time: undefined,
                            update_time: new Date()
                        }
                    });
                }
            }
        }

        response.json(true);
    } catch (e) {
        logger.error(e);
        response.status(500).json({ message: 'Could not update cohort' });
    }
});

router.get('/lookup', async (request, response) => {
    let { locals } = request.app;
    let { lookup, mysql } = locals;

    try {
        if (!lookup) {
            locals.lookup = lookup = {
                cancer: await mysql.query(`SELECT id, icd9, icd10, cancer FROM lu_cancer ORDER BY icd9 = ''`),
                case_type: await mysql.query(`SELECT id, case_type FROM lu_case_type`),
                cohort_status: await mysql.query(`SELECT id, cohortstatus FROM lu_cohort_status`),
                data_category: await mysql.query(`SELECT id, category, sub_category FROM lu_data_category`),
                ethnicity: await mysql.query(`SELECT id, ethnicity FROM lu_ethnicity`),
                gender: await mysql.query(`SELECT id, gender FROM lu_gender`),
                person_category: await mysql.query(`SELECT id, category FROM lu_person_category`),
                race: await mysql.query(`SELECT id, race FROM lu_race`),
                specimen: await mysql.query(`SELECT id, specimen, sub_category FROM lu_specimen`),
            }
        }
        response.json(lookup);
    } catch (e) {
        logger.error(e);
        response.status(500).json({ message: 'Could not fetch lookup tables' });
    }
});

module.exports = router