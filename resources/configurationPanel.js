{
  "configurationSettings": [{
    "category": "<b>General</b>",
    "fields": [{
      "type": "webmap",
      "label": "Select a map"
    }, {
      "type": "string",
      "fieldName": "title",
      "label": "Title",
      "tooltip": "Title",
      "placeHolder": "Title"
    }]
  }, {
    "category": "<b>Theme</b>",
    "fields": [{
      "type": "subcategory",
      "label": "Colors"
    }, {
      "type": "color",
      "fieldName": "color",
      "label": "Color",
      "tooltip": "Color",
      "sharedThemeProperty": "header.background"
    }, {
      "type": "string",
      "fieldName": "logo",
      "label": "Logo URL",
      "tooltip": "Logo",
      "placeHolder": "Logo URL",
      "sharedThemeProperty": "logo.small"
    }]
  }, {
    "category": "<b>Summary Layer</b>",
    "fields": [{
      "type": "layerAndFieldSelector",
      "fields": [{
        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString"],
        "multipleSelection": false,
        "fieldName": "filterField",
        "label": "Field to filter features",
        "tooltip": "Field used to filter features"
      }, {
        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
        "multipleSelection": true,
        "fieldName": "sumFields",
        "label": "Summary fields",
        "tooltip": "List of numeric fields where the sum will be displayed"
      }, {
        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
        "multipleSelection": true,
        "fieldName": "avgFields",
        "label": "Average fields",
        "tooltip": "List of numeric fields where the average value will be displayed"
      }, {
        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
        "multipleSelection": true,
        "fieldName": "minFields",
        "label": "Minimum fields",
        "tooltip": "List of numeric fields where the minimum value will be displayed"
      }, {
        "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
        "multipleSelection": true,
        "fieldName": "maxFields",
        "label": "Maximum fields",
        "tooltip": "List of numeric fields where the maximum value will be displayed"
      }],
      "layerOptions": {
        "supportedTypes": ["FeatureLayer", "FeatureCollection"],
        "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolygon"]
      },
      "fieldName": "summaryLayer",
      "label": "Summary layer",
      "tooltip": "Layer that will be summarized"
    }, {
      "type": "boolean",
      "fieldName": "cluster",
      "label": "Display summary as clusters ",
      "tooltip": "Summary layer points will be displayed as clusters"
    }, {
      "type": "boolean",
      "fieldName": "hideCount",
      "label": "Hide feature count",
      "tooltip": "Hide feature count"
    }, {
      "type": "boolean",
      "fieldName": "hideSummaryType",
      "label": "Hide type of summary",
      "tooltip": "Hide type of summary for each field"
    }]
  }],
  "values": {
    "title": "Summary Viewer",
    "logo": "images/logo.png",
    "color": "#80ab00",
    "cluster": true,
    "hideCount": false,
    "hideSummaryType": false
  }
}