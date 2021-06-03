var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_Naklon_500_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Naklon_500",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Naklon_500_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1489035.981223, 5689244.878759, 1841005.841183, 5923678.505570]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Naklon_500_1.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Naklon_500_1];
