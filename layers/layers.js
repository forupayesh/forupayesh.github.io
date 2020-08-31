var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gaz_Line_Buffer_1 = new ol.format.GeoJSON();
var features_Gaz_Line_Buffer_1 = format_Gaz_Line_Buffer_1.readFeatures(json_Gaz_Line_Buffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gaz_Line_Buffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gaz_Line_Buffer_1.addFeatures(features_Gaz_Line_Buffer_1);
var lyr_Gaz_Line_Buffer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gaz_Line_Buffer_1, 
                style: style_Gaz_Line_Buffer_1,
                interactive: true,
                title: '<img src="styles/legend/Gaz_Line_Buffer_1.png" /> Gaz_Line_Buffer'
            });
var format_Gaz_Line_2 = new ol.format.GeoJSON();
var features_Gaz_Line_2 = format_Gaz_Line_2.readFeatures(json_Gaz_Line_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gaz_Line_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gaz_Line_2.addFeatures(features_Gaz_Line_2);
var lyr_Gaz_Line_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gaz_Line_2, 
                style: style_Gaz_Line_2,
                interactive: true,
                title: '<img src="styles/legend/Gaz_Line_2.png" /> Gaz_Line'
            });
var format_SHPSubway_Buffer_3 = new ol.format.GeoJSON();
var features_SHPSubway_Buffer_3 = format_SHPSubway_Buffer_3.readFeatures(json_SHPSubway_Buffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPSubway_Buffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPSubway_Buffer_3.addFeatures(features_SHPSubway_Buffer_3);
var lyr_SHPSubway_Buffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHPSubway_Buffer_3, 
                style: style_SHPSubway_Buffer_3,
                interactive: true,
                title: '<img src="styles/legend/SHPSubway_Buffer_3.png" /> SHPSubway_Buffer'
            });
var format_Subway_4 = new ol.format.GeoJSON();
var features_Subway_4 = format_Subway_4.readFeatures(json_Subway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subway_4.addFeatures(features_Subway_4);
var lyr_Subway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subway_4, 
                style: style_Subway_4,
                interactive: true,
                title: '<img src="styles/legend/Subway_4.png" /> Subway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Gaz_Line_Buffer_1.setVisible(true);lyr_Gaz_Line_2.setVisible(true);lyr_SHPSubway_Buffer_3.setVisible(true);lyr_Subway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gaz_Line_Buffer_1,lyr_Gaz_Line_2,lyr_SHPSubway_Buffer_3,lyr_Subway_4];
lyr_Gaz_Line_Buffer_1.set('fieldAliases', {'Id': 'Id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Gaz_Line_2.set('fieldAliases', {'Id': 'Id', });
lyr_SHPSubway_Buffer_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Subway_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Gaz_Line_Buffer_1.set('fieldImages', {'Id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Gaz_Line_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_SHPSubway_Buffer_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Subway_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Gaz_Line_Buffer_1.set('fieldLabels', {'Id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Gaz_Line_2.set('fieldLabels', {'Id': 'no label', });
lyr_SHPSubway_Buffer_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Subway_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Subway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});