/**
 * ✅ DYNAMIC PAGE CONFIGURATION
 */

const appConfig = {
  "appTitle": "IITM Water Management",
  "defaultLanguage": "en",
  "pages": {
    "main_sump": {
      "id": "main_sump",
      "displayName": "Main Sump",
      "title": "Main Sump Water Level Monitoring",
      "icon": "",
      "sensors": {
        "Main Sump": {
          "displayName": "Main Sump",
          "channelID": "3156369",
          "apiKey": "CU8K2JLAOSV53K4X",
          "field": "field3",
          "isInteger": true,
          "limits": {
            "warning": 300,
            "danger": 100
          }
        }
      }
    },
    "pampa": {
      "id": "pampa",
      "displayName": "Pampa Sump",
      "title": "Pampa Sump Water Level Monitoring",
      "icon": "",
      "sensors": {
        "Pampa Sump": {
          "displayName": "Pampa Sump",
          "channelID": "2322174",
          "apiKey": "9VMWLF58YXMSKZ4O",
          "field": "field1",
          "isInteger": true,
          "limits": {
            "warning": 100,
            "danger": 60
          }
        }
      }
    },
    "himalaya": {
      "id": "himalaya",
      "displayName": "Himalaya OHT",
      "title": "Himalaya OHT Water Level Monitoring",
      "icon": "",
      "sensors": {
        "Himalaya OHT": {
          "displayName": "Himalaya OHT",
          "channelID": "2322174",
          "apiKey": "9VMWLF58YXMSKZ4O",
          "field": "field7",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 60
          }
        }
      }
    },
    "mandakini": {
      "id": "mandakini",
      "displayName": "Mandakini Sump",
      "title": "Mandakini Water Level Monitoring",
      "icon": "",
      "sensors": {
        "Mandakini Sump": {
          "displayName": "Mandakini Sump",
          "channelID": "2592245",
          "apiKey": "KI554EX3UF1UNCO9",
          "field": "field1",
          "isInteger": true,
          "limits": {
            "warning": 150,
            "danger": 70
          }
        }
      }
    },
    "ICSR": {
      "id": "ICSR",
      "displayName": "ICSR",
      "title": "ICSR Water Level Monitoring",
      "icon": "",
      "sensors": {
        "ICSR_1": {
          "displayName": "ICSR Sump",
          "channelID": "2511342",
          "apiKey": "IFAV1XCYUFW5Y478",
          "field": "field1",
          "isInteger": true,
          "limits": {
            "warning": 100,
            "danger": 60
          }
        },
        "ICSR_2": {
          "displayName": "ICSR OHT",
          "channelID": "2511342",
          "apiKey": "IFAV1XCYUFW5Y478",
          "field": "field6",
          "isInteger": true,
          "limits": {
            "warning": 50,
            "danger": 30
          }
        }
      }
    },
    "C2_Sump": {
      "id": "C2_Sump",
      "displayName": "C2 Sump",
      "title": "C2 Sump Water Level Monitoring",
      "icon": "",
      "sensors": {
        "C2_Sump": {
          "displayName": "C2 Sump",
          "channelID": "2177700",
          "apiKey": "9OY9NTLLOW1NHUXZ",
          "field": "field1",
          "isInteger": true,
          "limits": {
            "warning": 100,
            "danger": 50
          }
        }
      }
    },
    "NAC_2": {
      "id": "NAC_2",
      "displayName": "NAC 2",
      "title": "NAC 2 Water Level Monitoring",
      "icon": "",
      "sensors": {
        "NAC2_Grey": {
          "displayName": "NAC 2 Grey Water",
          "channelID": "3216774",
          "apiKey": "KGC4A4F0EESD4RR0",
          "field": "field2",
          "isInteger": true,
          "limits": {
            "warning": 100,
            "danger": 50
          }
        },
        "NAC2_Metro": {
          "displayName": "NAC 2 Metro Water",
          "channelID": "3216774",
          "apiKey": "KGC4A4F0EESD4RR0",
          "field": "field5",
          "isInteger": true,
          "limits": {
            "warning": 100,
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
