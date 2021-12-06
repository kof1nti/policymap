var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Conservation_Areas_1 = new ol.format.GeoJSON();
var features_Conservation_Areas_1 = format_Conservation_Areas_1.readFeatures(json_Conservation_Areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_Areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_Areas_1.addFeatures(features_Conservation_Areas_1);
var lyr_Conservation_Areas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conservation_Areas_1, 
                style: style_Conservation_Areas_1,
                interactive: true,
                title: '<img src="styles/legend/Conservation_Areas_1.png" /> Conservation_Areas'
            });
var format_Designated_Open_Space_2 = new ol.format.GeoJSON();
var features_Designated_Open_Space_2 = format_Designated_Open_Space_2.readFeatures(json_Designated_Open_Space_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Designated_Open_Space_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Designated_Open_Space_2.addFeatures(features_Designated_Open_Space_2);
var lyr_Designated_Open_Space_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Designated_Open_Space_2, 
                style: style_Designated_Open_Space_2,
                interactive: true,
                title: '<img src="styles/legend/Designated_Open_Space_2.png" /> Designated_Open_Space'
            });
var format_Site_Allocations_3 = new ol.format.GeoJSON();
var features_Site_Allocations_3 = format_Site_Allocations_3.readFeatures(json_Site_Allocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Site_Allocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Site_Allocations_3.addFeatures(features_Site_Allocations_3);
var lyr_Site_Allocations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Site_Allocations_3, 
                style: style_Site_Allocations_3,
                interactive: true,
                title: '<img src="styles/legend/Site_Allocations_3.png" /> Site_Allocations'
            });
var format_Areas_of_Intensification_4 = new ol.format.GeoJSON();
var features_Areas_of_Intensification_4 = format_Areas_of_Intensification_4.readFeatures(json_Areas_of_Intensification_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_of_Intensification_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_of_Intensification_4.addFeatures(features_Areas_of_Intensification_4);
var lyr_Areas_of_Intensification_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_of_Intensification_4, 
                style: style_Areas_of_Intensification_4,
                interactive: true,
                title: '<img src="styles/legend/Areas_of_Intensification_4.png" /> Areas_of_Intensification'
            });
var format_Opportunity_Areas1Opportunity_AreasMultiPolygon_5 = new ol.format.GeoJSON();
var features_Opportunity_Areas1Opportunity_AreasMultiPolygon_5 = format_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.readFeatures(json_Opportunity_Areas1Opportunity_AreasMultiPolygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.addFeatures(features_Opportunity_Areas1Opportunity_AreasMultiPolygon_5);
var lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Opportunity_Areas1Opportunity_AreasMultiPolygon_5, 
                style: style_Opportunity_Areas1Opportunity_AreasMultiPolygon_5,
                interactive: true,
                title: '<img src="styles/legend/Opportunity_Areas1Opportunity_AreasMultiPolygon_5.png" /> Opportunity_Areas (1) Opportunity_Areas MultiPolygon'
            });
var group_TRANSFORMATIONAREAS = new ol.layer.Group({
                                layers: [lyr_Site_Allocations_3,lyr_Areas_of_Intensification_4,lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5,],
                                title: "TRANSFORMATION AREAS"});
var group_NATUREANDENVIRONMENT = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Conservation_Areas_1,lyr_Designated_Open_Space_2,],
                                title: "NATURE AND ENVIRONMENT"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Conservation_Areas_1.setVisible(true);lyr_Designated_Open_Space_2.setVisible(true);lyr_Site_Allocations_3.setVisible(true);lyr_Areas_of_Intensification_4.setVisible(true);lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.setVisible(true);
var layersList = [group_NATUREANDENVIRONMENT,group_TRANSFORMATIONAREAS];
lyr_Conservation_Areas_1.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Designated_Open_Space_2.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Site_Allocations_3.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Areas_of_Intensification_4.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planningauthority': 'planningauthority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.set('fieldAliases', {'fid': 'fid', 'address': 'address', 'borough': 'borough', 'boroughdesignation': 'boroughdesignation', 'classification': 'classification', 'designation': 'designation', 'easting': 'easting', 'extrainfo1': 'extrainfo1', 'extrainfo2': 'extrainfo2', 'extrainfo3': 'extrainfo3', 'firstaddeddate': 'firstaddeddate', 'hectares': 'hectares', 'lastupdateddate': 'lastupdateddate', 'layerreference': 'layerreference', 'northing': 'northing', 'notes': 'notes', 'objectid': 'objectid', 'planning_authority': 'planning_authority', 'removeddate': 'removeddate', 'sitename': 'sitename', 'sitereference': 'sitereference', 'source': 'source', 'status': 'status', 'uprn': 'uprn', 'runtime': 'runtime', });
lyr_Conservation_Areas_1.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Designated_Open_Space_2.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Site_Allocations_3.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Areas_of_Intensification_4.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planningauthority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.set('fieldImages', {'fid': '', 'address': '', 'borough': '', 'boroughdesignation': '', 'classification': '', 'designation': '', 'easting': '', 'extrainfo1': '', 'extrainfo2': '', 'extrainfo3': '', 'firstaddeddate': '', 'hectares': '', 'lastupdateddate': '', 'layerreference': '', 'northing': '', 'notes': '', 'objectid': '', 'planning_authority': '', 'removeddate': '', 'sitename': '', 'sitereference': '', 'source': '', 'status': '', 'uprn': '', 'runtime': '', });
lyr_Conservation_Areas_1.set('fieldLabels', {});
lyr_Designated_Open_Space_2.set('fieldLabels', {});
lyr_Site_Allocations_3.set('fieldLabels', {});
lyr_Areas_of_Intensification_4.set('fieldLabels', {});
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.set('fieldLabels', {});
lyr_Opportunity_Areas1Opportunity_AreasMultiPolygon_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});