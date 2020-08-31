var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'نقشه پایه',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_2010_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "فرونشست سال 2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2010_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [6561538.756397, 4335637.111950, 6667871.045900, 4402487.148212]
                            })
                        });
var lyr_2005_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "فرونشست سال 2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2005_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [6561640.350337, 4335823.197795, 6667740.751244, 4402330.825790]
                            })
                        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> خط لوله گاز'
            });

lyr__0.setVisible(true);lyr_2010_1.setVisible(true);lyr_2005_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr__0,lyr_2010_1,lyr_2005_2,lyr__3];
lyr__3.set('fieldAliases', {'Id': 'Id', });
lyr__3.set('fieldImages', {'Id': 'TextEdit', });
lyr__3.set('fieldLabels', {'Id': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});