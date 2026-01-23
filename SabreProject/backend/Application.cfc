component {

    this.name = "SabreProjectLucee";

    // Load the SQLite JDBC jar explicitly by full path
    
    this.javaSettings = {
        loadPaths = [
            "D:/Frontend Development/React/SabreProject/backend/lib/sqlite-jdbc-3.51.1.0.jar"
        ],
        loadColdFusionClassPath = true
    };

    function onRequestStart(){
        var response = getPageContext().getResponse();
        // CORS for React
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return true;
    }
}