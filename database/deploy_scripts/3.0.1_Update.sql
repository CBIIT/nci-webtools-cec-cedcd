/*
* this script file includes DB updates during CEDCD release 3.0.0
*
* !!!! consider these sqls could be repeated for each deploy !!!!
*  any table structures changes need update accordingly in Schema/cedec_Tables.sql file
*
*/

use cedcd;

-- add new category as N/A type
/*
insert ignore into lu_data_category (id, category, sub_category) 
values (42,'Other Tobacco Products','Not Applicable'); 

insert major_content  (cohort_id, category_id) 
select distinct b.cohort_id, 42 
from major_content b where b.cohort_id not in (select distinct c.cohort_id from major_content c where c.category_id=42);

-- add new field to keep cancer condition N/A status
alter table cancer_info add column (mdc_cancer_related_conditions_na int);
*/

delete from major_content where category_id = 42;

delete from lu_data_category where id=42;

alter table cancer_info drop column mdc_cancer_related_conditions_na ;
