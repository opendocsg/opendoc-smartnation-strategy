(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "01-introduction.md",
                title: "Introduction",
                url: "/opendoc-smartnation-strategy/01-introduction.html",
                escapedPath: "01-introduction.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "02-digital-government-digital-economy.md",
                title: "Digital Government, Digital Economy and Digital Society",
                url: "/opendoc-smartnation-strategy/02-digital-government-digital-economy.html",
                escapedPath: "02-digital-government-digital-economy.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "03-system-foundations.md",
                title: "System Foundations",
                url: "/opendoc-smartnation-strategy/03-system-foundations.html",
                escapedPath: "03-system-foundations.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "04-people-and-culture.md",
                title: "People and Culture",
                url: "/opendoc-smartnation-strategy/04-people-and-culture.html",
                escapedPath: "04-people-and-culture.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "05-smart-nation-projects.md",
                title: "Smart Nation Projects",
                url: "/opendoc-smartnation-strategy/05-smart-nation-projects.html",
                escapedPath: "05-smart-nation-projects.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "06-strengthening-nexus.md",
                title: "Strengthening the academia-industry-Government nexus",
                url: "/opendoc-smartnation-strategy/06-strengthening-nexus.html",
                escapedPath: "06-strengthening-nexus.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "07-make-strategic-bets.md",
                title: "Make strategic bets in artificial intelligence and other frontier technologies",
                url: "/opendoc-smartnation-strategy/07-make-strategic-bets.html",
                escapedPath: "07-make-strategic-bets.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "08-strengthen-collaboration.md",
                title: "Strengthen Singapore’s collaboration with the international community",
                url: "/opendoc-smartnation-strategy/08-strengthen-collaboration.html",
                escapedPath: "08-strengthen-collaboration.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "09-what-can-i-do.md",
                title: "What Can I Do for Smart Nation?",
                url: "/opendoc-smartnation-strategy/09-what-can-i-do.html",
                escapedPath: "09-what-can-i-do.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "10-conclusion.md",
                title: "Conclusion",
                url: "/opendoc-smartnation-strategy/10-conclusion.html",
                escapedPath: "10-conclusion.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        {
                name: "index.md",
                title: "Executive Summary",
                url: "/opendoc-smartnation-strategy/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Smart Nation: The Way Forward","",["01-introduction.md","02-digital-government-digital-economy.md","03-system-foundations.md","04-people-and-culture.md","05-smart-nation-projects.md","06-strengthening-nexus.md","07-make-strategic-bets.md","08-strengthen-collaboration.md","09-what-can-i-do.md","10-conclusion.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()