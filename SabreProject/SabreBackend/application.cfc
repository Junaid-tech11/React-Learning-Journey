<cfcomponent output="false">

    <cfset this.name = "SabreFinalApp">
    <cfset this.applicationTimeout = createTimeSpan(1,0,0,0)>
    <cfset this.sessionManagement = true>
    <cfset this.sessionTimeout = createTimeSpan(0,0,30,0)>
    <cfset this.setClientCookies = true>
    
    <!--- Enable REST services --->
    <cfset this.restSettings = {}>
    <cfset this.restSettings.cfclocation = "/">
    <cfset this.restSettings.skipCFCWithError = true>
    
    <!--- Configure datasource in application scope --->
    <cfset this.datasource = "teamDSN">
    
    <!--- Optional: Define datasource programmatically (if not using server.json) --->
    <!---
    <cfset this.datasources = {}>
    <cfset this.datasources.teamDSN = {
        class: 'org.sqlite.JDBC',
        connectionString: 'jdbc:sqlite:C:/Users/JUNAID/OneDrive/Desktop/team_directory.db'
    }>
    --->

</cfcomponent>