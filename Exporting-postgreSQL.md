### Exporting postgreSQL using the Terminal

It is very easy to export your database using the Terminal! Once you have created your Database, and have all the information you wish to export, you can export using the following ** command line ** code:

```
pg_dump -U USERNAME DBNAME > dbexport.pgsql
```
In place of the ** USERNAME **, use your own Username connected with psql, and for the ** DBNAME ** use the name you gave to the database.

You may get the following message when trying to export a database:

```
pg_dump: SQL command failed
pg_dump: Error message from server: ERROR:  permission denied for schema topology
pg_dump: The command was: LOCK TABLE topology.topology IN ACCESS SHARE MODE
```
These errors occur because some server database templates include PostGIS with restricted access permissions.

To export a PostgreSQL database without this data, type the following command instead of the one listed above:

```
pg_dump -U USERNAME DBNAME -N topology -T spatial_ref_sys > dbexport.pgsql
```
