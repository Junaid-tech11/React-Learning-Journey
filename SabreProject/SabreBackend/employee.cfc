<cfcomponent rest="true" restpath="employee">

    <cffunction name="getEmployees" access="remote" returnType="query" httpmethod="GET" restpath="list" produces="application/json">
        <cfargument name="search" type="string" required="false" default="">
        
        <!--- Set CORS headers to allow React app to access this API --->
        <cfheader name="Access-Control-Allow-Origin" value="*">
        <cfheader name="Access-Control-Allow-Methods" value="GET, POST, OPTIONS">
        <cfheader name="Access-Control-Allow-Headers" value="Content-Type">
        
        <!--- Query with security best practice using cfqueryparam --->
        <cfquery name="qEmployees" datasource="teamDSN">
            SELECT 
                ID,
                FirstName,
                LastName,
                Role,
                Email,
                Department,
                HireDate
            FROM Employees
            <cfif len(trim(arguments.search)) GT 0>
                WHERE 
                    LOWER(FirstName) LIKE <cfqueryparam value="%#lcase(arguments.search)#%" cfsqltype="cf_sql_varchar">
                    OR LOWER(LastName) LIKE <cfqueryparam value="%#lcase(arguments.search)#%" cfsqltype="cf_sql_varchar">
                    OR LOWER(Role) LIKE <cfqueryparam value="%#lcase(arguments.search)#%" cfsqltype="cf_sql_varchar">
            </cfif>
            ORDER BY LastName, FirstName
        </cfquery>
        
        <cfreturn qEmployees>
    </cffunction>
    
    <!--- Handle OPTIONS request for CORS preflight --->
    <cffunction name="handleOptions" access="remote" returnType="void" httpmethod="OPTIONS" restpath="list">
        <cfheader name="Access-Control-Allow-Origin" value="*">
        <cfheader name="Access-Control-Allow-Methods" value="GET, POST, OPTIONS">
        <cfheader name="Access-Control-Allow-Headers" value="Content-Type">
        <cfheader statuscode="200" statustext="OK">
    </cffunction>

</cfcomponent>