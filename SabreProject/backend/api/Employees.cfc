component output="false" {

    remote array function getAllEmployees()
        httpmethod="GET"
        returnFormat="json"
        output="false" {


        var employees = [
            {
                ID         : 1,
                FirstName  : "Ayesha",
                LastName   : "Khan",
                Role       : "Frontend Engineer",
                Department : "Digital Experience",
                Location   : "Karachi",
                Email      : "ayesha.khan@sabre-demo.pk",
                Skills     : "React, TypeScript, UX"
            },
            {
                ID         : 2,
                FirstName  : "Bilal",
                LastName   : "Ahmed",
                Role       : "Backend Engineer",
                Department : "Platform Services",
                Location   : "Lahore",
                Email      : "bilal.ahmed@sabre-demo.pk",
                Skills     : "ColdFusion, REST APIs, SQL"
            },
            {
                ID         : 3,
                FirstName  : "Fatima",
                LastName   : "Raza",
                Role       : "Full‑Stack Developer",
                Department : "Product Engineering",
                Location   : "Islamabad",
                Email      : "fatima.raza@sabre-demo.pk",
                Skills     : "React, Node.js, SQL"
            },
            {
                ID         : 4,
                FirstName  : "Hassan",
                LastName   : "Ali",
                Role       : "DevOps Engineer",
                Department : "Cloud & Infrastructure",
                Location   : "Karachi",
                Email      : "hassan.ali@sabre-demo.pk",
                Skills     : "CI/CD, Docker, Linux"
            },
            {
                ID         : 5,
                FirstName  : "Sana",
                LastName   : "Iqbal",
                Role       : "QA Engineer",
                Department : "Quality Engineering",
                Location   : "Lahore",
                Email      : "sana.iqbal@sabre-demo.pk",
                Skills     : "Test Automation, Cypress, API Testing"
            }
        ];

        return employees;
    }
}