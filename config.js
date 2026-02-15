/**
 * ✅ DYNAMIC PAGE CONFIGURATION
 */

const appConfig = {
  "appTitle": "Padur Water Management",
  "defaultLanguage": "en",
  "pages": {
    "tank_1": {
      "id": "tank_1",
      "displayName": "Tank 1",
      "title": "Tank 1 Water Level Monitoring",
      "icon": "",
      "sensors": {
        "tank_1": {
          "displayName": "Tank 1",
          "channelID": "3242498",
          "apiKey": "MGJ0PCCTOIWBF5JL",
          "field": "2",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 50
          }
        }
      }
    },
    "tank_2": {
      "id": "tank_2",
      "displayName": "Tank 2",
      "title": "Tank 2 Water Level Monitoring",
      "icon": "",
      "sensors": {
        "tank_2": {
          "displayName": "Tank 2",
          "channelID": "2691178",
          "apiKey": "7B33G54EII311842",
          "field": "1",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 50
          }
        }
      }
    },
    "tank_3": {
      "id": "tank_3",
      "displayName": "Tank 3",
      "title": "Tank 3 Water Level Monitoring",
      "icon": "",
      "sensors": {
        "tank_3": {
          "displayName": "Tank 3",
          "channelID": "2691178",
          "apiKey": "7B33G54EII311842",
          "field": "3",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 50
          }
        }
      }
    },
    "tank_4": {
      "id": "tank_4",
      "displayName": "Tank 4",
      "title": "Tank 4 Water Level Monitoring",
      "icon": "",
      "sensors": {
        "tank_4": {
          "displayName": "Tank 4",
          "channelID": "2691178",
          "apiKey": "7B33G54EII311842",
          "field": "5",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 50
          }
        }
      }
    }
  }
};

// Helper methods for config
appConfig.getAllPages = function() {
  return Object.values(this.pages).map(page => ({
    id: page.id,
    displayName: page.displayName,
    icon: page.icon || '📊'
  }));
};

appConfig.getPage = function(pageId) {
  return this.pages[pageId];
};

appConfig.getSensorsForPage = function(pageId) {
  const page = this.pages[pageId];
  return page ? Object.values(page.sensors) : [];
};

if (typeof window !== "undefined") {
    window.appConfig = appConfig;
}
