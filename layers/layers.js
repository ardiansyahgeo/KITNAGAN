var wms_layers = [];


        var lyr_SATELIT_GOOGLE_0 = new ol.layer.Tile({
            'title': 'SATELIT_GOOGLE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_elevasi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "elevasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/elevasi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10716719.035662, 447296.597907, 10722229.901542, 451473.492654]
                            })
                        });
var format_BANJIR_2 = new ol.format.GeoJSON();
var features_BANJIR_2 = format_BANJIR_2.readFeatures(json_BANJIR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANJIR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANJIR_2.addFeatures(features_BANJIR_2);
var lyr_BANJIR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANJIR_2, 
                style: style_BANJIR_2,
                interactive: true,
    title: 'BANJIR<br />\
    <img src="styles/legend/BANJIR_2_0.png" /> Tinggi<br />\
    <img src="styles/legend/BANJIR_2_1.png" /> Sedang<br />\
    <img src="styles/legend/BANJIR_2_2.png" /> Rendah<br />'
        });
var format_KARHUTLA_3 = new ol.format.GeoJSON();
var features_KARHUTLA_3 = format_KARHUTLA_3.readFeatures(json_KARHUTLA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KARHUTLA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KARHUTLA_3.addFeatures(features_KARHUTLA_3);
var lyr_KARHUTLA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KARHUTLA_3, 
                style: style_KARHUTLA_3,
                interactive: true,
    title: 'KARHUTLA<br />\
    <img src="styles/legend/KARHUTLA_3_0.png" /> Sangat Rawan<br />\
    <img src="styles/legend/KARHUTLA_3_1.png" /> Rawan<br />\
    <img src="styles/legend/KARHUTLA_3_2.png" /> Tidak Rawan<br />'
        });
var format_KESUBURAN_TANAH_4 = new ol.format.GeoJSON();
var features_KESUBURAN_TANAH_4 = format_KESUBURAN_TANAH_4.readFeatures(json_KESUBURAN_TANAH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESUBURAN_TANAH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESUBURAN_TANAH_4.addFeatures(features_KESUBURAN_TANAH_4);
var lyr_KESUBURAN_TANAH_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KESUBURAN_TANAH_4, 
                style: style_KESUBURAN_TANAH_4,
                interactive: true,
    title: 'KESUBURAN_TANAH<br />\
    <img src="styles/legend/KESUBURAN_TANAH_4_0.png" /> Tanah Subur<br />\
    <img src="styles/legend/KESUBURAN_TANAH_4_1.png" /> Kurang Subur<br />\
    <img src="styles/legend/KESUBURAN_TANAH_4_2.png" /> Tidak Subur<br />'
        });
var format_TSUNAMI_5 = new ol.format.GeoJSON();
var features_TSUNAMI_5 = format_TSUNAMI_5.readFeatures(json_TSUNAMI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSUNAMI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSUNAMI_5.addFeatures(features_TSUNAMI_5);
var lyr_TSUNAMI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TSUNAMI_5, 
                style: style_TSUNAMI_5,
                interactive: true,
    title: 'TSUNAMI<br />\
    <img src="styles/legend/TSUNAMI_5_0.png" /> Sangat Rawan<br />\
    <img src="styles/legend/TSUNAMI_5_1.png" /> Rawan<br />\
    <img src="styles/legend/TSUNAMI_5_2.png" /> Tidak Rawan<br />'
        });
var format_DAS_6 = new ol.format.GeoJSON();
var features_DAS_6 = format_DAS_6.readFeatures(json_DAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_6.addFeatures(features_DAS_6);
var lyr_DAS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAS_6, 
                style: style_DAS_6,
                interactive: true,
    title: 'DAS<br />\
    <img src="styles/legend/DAS_6_0.png" /> Seunagan<br />\
    <img src="styles/legend/DAS_6_1.png" /> Tadu<br />\
    <img src="styles/legend/DAS_6_2.png" /> Trang<br />'
        });
var format_GEOLOGI_7 = new ol.format.GeoJSON();
var features_GEOLOGI_7 = format_GEOLOGI_7.readFeatures(json_GEOLOGI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGI_7.addFeatures(features_GEOLOGI_7);
var lyr_GEOLOGI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGI_7, 
                style: style_GEOLOGI_7,
                interactive: true,
    title: 'GEOLOGI<br />\
    <img src="styles/legend/GEOLOGI_7_0.png" /> Aluvium Muda<br />\
    <img src="styles/legend/GEOLOGI_7_1.png" /> Meulaboh Formation<br />\
    <img src="styles/legend/GEOLOGI_7_2.png" /> Takengon-Calang (Cek)<br />'
        });
var format_JENIS_TANAH_8 = new ol.format.GeoJSON();
var features_JENIS_TANAH_8 = format_JENIS_TANAH_8.readFeatures(json_JENIS_TANAH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_TANAH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_TANAH_8.addFeatures(features_JENIS_TANAH_8);
var lyr_JENIS_TANAH_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JENIS_TANAH_8, 
                style: style_JENIS_TANAH_8,
                interactive: true,
    title: 'JENIS_TANAH<br />\
    <img src="styles/legend/JENIS_TANAH_8_0.png" /> Aluvial; Aluvial<br />\
    <img src="styles/legend/JENIS_TANAH_8_1.png" /> Aluvial; Aluvial; Podsolik coklat<br />\
    <img src="styles/legend/JENIS_TANAH_8_2.png" /> Aluvial; Grumosol; Aluvial<br />\
    <img src="styles/legend/JENIS_TANAH_8_3.png" /> Aluvial; Podsolik coklat<br />\
    <img src="styles/legend/JENIS_TANAH_8_4.png" /> Aluvial; Podsolik coklat; Podsolik merah kuning<br />\
    <img src="styles/legend/JENIS_TANAH_8_5.png" /> Aluvial; Regosol; Regosol<br />\
    <img src="styles/legend/JENIS_TANAH_8_6.png" /> Organosol; Organosol; Aluvial<br />\
    <img src="styles/legend/JENIS_TANAH_8_7.png" /> Organsol; Organosol; Aluvial<br />\
    <img src="styles/legend/JENIS_TANAH_8_8.png" /> Podsolik<br />\
    <img src="styles/legend/JENIS_TANAH_8_9.png" /> Podsolik coklat; Podsolik merah kuning; Aluvial<br />\
    <img src="styles/legend/JENIS_TANAH_8_10.png" /> Regosol; Aluvial; Grumosol<br />'
        });
var format_POLARUANG_RTRW_9 = new ol.format.GeoJSON();
var features_POLARUANG_RTRW_9 = format_POLARUANG_RTRW_9.readFeatures(json_POLARUANG_RTRW_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_RTRW_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_RTRW_9.addFeatures(features_POLARUANG_RTRW_9);
var lyr_POLARUANG_RTRW_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANG_RTRW_9, 
                style: style_POLARUANG_RTRW_9,
                interactive: true,
    title: 'POLARUANG_RTRW<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_0.png" /> Bandar Udara<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_1.png" /> Industri<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_2.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_3.png" /> Kawasan Transmigrasi<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_4.png" /> Perkebunan Besar<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_5.png" /> Perkebunan Masyarakat<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_6.png" /> Permukiman Pedesaan<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_7.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_8.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_9.png" /> Peternakan<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_10.png" /> Sawah Irigasi<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_11.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_12.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/POLARUANG_RTRW_9_13.png" /> Sungai<br />'
        });
var lyr_KesesuaianPerluasan_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kesesuaian Perluasan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KesesuaianPerluasan_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10716719.035707, 447295.167732, 10722229.901587, 451681.330744]
                            })
                        });
var format_HAKATASTANAH_11 = new ol.format.GeoJSON();
var features_HAKATASTANAH_11 = format_HAKATASTANAH_11.readFeatures(json_HAKATASTANAH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAKATASTANAH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAKATASTANAH_11.addFeatures(features_HAKATASTANAH_11);
var lyr_HAKATASTANAH_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAKATASTANAH_11, 
                style: style_HAKATASTANAH_11,
                interactive: true,
    title: 'HAK ATAS TANAH<br />\
    <img src="styles/legend/HAKATASTANAH_11_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HAKATASTANAH_11_1.png" /> Hak Guna Usaha<br />\
    <img src="styles/legend/HAKATASTANAH_11_2.png" /> Hak Milik<br />\
    <img src="styles/legend/HAKATASTANAH_11_3.png" /> Kosong<br />'
        });
var format_AreaKIT_12 = new ol.format.GeoJSON();
var features_AreaKIT_12 = format_AreaKIT_12.readFeatures(json_AreaKIT_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKIT_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKIT_12.addFeatures(features_AreaKIT_12);
var lyr_AreaKIT_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaKIT_12, 
                style: style_AreaKIT_12,
                interactive: true,
                title: '<img src="styles/legend/AreaKIT_12.png" /> Area KIT'
            });
var format_AreaPerluasan220Ha_13 = new ol.format.GeoJSON();
var features_AreaPerluasan220Ha_13 = format_AreaPerluasan220Ha_13.readFeatures(json_AreaPerluasan220Ha_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerluasan220Ha_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerluasan220Ha_13.addFeatures(features_AreaPerluasan220Ha_13);
var lyr_AreaPerluasan220Ha_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaPerluasan220Ha_13, 
                style: style_AreaPerluasan220Ha_13,
                interactive: true,
                title: '<img src="styles/legend/AreaPerluasan220Ha_13.png" /> Area Perluasan (220 Ha)'
            });
var format_BatasGampongKP_14 = new ol.format.GeoJSON();
var features_BatasGampongKP_14 = format_BatasGampongKP_14.readFeatures(json_BatasGampongKP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasGampongKP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasGampongKP_14.addFeatures(features_BatasGampongKP_14);
var lyr_BatasGampongKP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasGampongKP_14, 
                style: style_BatasGampongKP_14,
                interactive: true,
                title: '<img src="styles/legend/BatasGampongKP_14.png" /> Batas Gampong KP'
            });
var format_Kontur_15 = new ol.format.GeoJSON();
var features_Kontur_15 = format_Kontur_15.readFeatures(json_Kontur_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_15.addFeatures(features_Kontur_15);
var lyr_Kontur_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kontur_15, 
                style: style_Kontur_15,
                interactive: true,
                title: '<img src="styles/legend/Kontur_15.png" /> Kontur'
            });

lyr_SATELIT_GOOGLE_0.setVisible(true);lyr_elevasi_1.setVisible(false);lyr_BANJIR_2.setVisible(false);lyr_KARHUTLA_3.setVisible(false);lyr_KESUBURAN_TANAH_4.setVisible(false);lyr_TSUNAMI_5.setVisible(false);lyr_DAS_6.setVisible(false);lyr_GEOLOGI_7.setVisible(false);lyr_JENIS_TANAH_8.setVisible(false);lyr_POLARUANG_RTRW_9.setVisible(false);lyr_KesesuaianPerluasan_10.setVisible(false);lyr_HAKATASTANAH_11.setVisible(false);lyr_AreaKIT_12.setVisible(true);lyr_AreaPerluasan220Ha_13.setVisible(false);lyr_BatasGampongKP_14.setVisible(true);lyr_Kontur_15.setVisible(false);
var layersList = [lyr_SATELIT_GOOGLE_0,lyr_elevasi_1,lyr_BANJIR_2,lyr_KARHUTLA_3,lyr_KESUBURAN_TANAH_4,lyr_TSUNAMI_5,lyr_DAS_6,lyr_GEOLOGI_7,lyr_JENIS_TANAH_8,lyr_POLARUANG_RTRW_9,lyr_KesesuaianPerluasan_10,lyr_HAKATASTANAH_11,lyr_AreaKIT_12,lyr_AreaPerluasan220Ha_13,lyr_BatasGampongKP_14,lyr_Kontur_15];
lyr_BANJIR_2.set('fieldAliases', {'banjir': 'banjir', });
lyr_KARHUTLA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KARHUTLA': 'KARHUTLA', });
lyr_KESUBURAN_TANAH_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KESUBURAN': 'KESUBURAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TSUNAMI_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RAWAN_TSUN': 'RAWAN_TSUN', });
lyr_DAS_6.set('fieldAliases', {'Id': 'Id', 'Nama_DAS': 'Nama_DAS', 'Nama_WS': 'Nama_WS', 'Sumber': 'Sumber', });
lyr_GEOLOGI_7.set('fieldAliases', {'LONG_TEXT1': 'LONG_TEXT1', });
lyr_JENIS_TANAH_8.set('fieldAliases', {'DUDAL_SUPR': 'DUDAL_SUPR', });
lyr_POLARUANG_RTRW_9.set('fieldAliases', {'rencana': 'rencana', 'Luas_ha': 'Luas_ha', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_HAKATASTANAH_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'WILAYAHID': 'WILAYAHID', 'WILAYAHIND': 'WILAYAHIND', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'NOMORVIRTU': 'NOMORVIRTU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AreaKIT_12.set('fieldAliases', {'rencana': 'rencana', 'Luas_ha': 'Luas_ha', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_AreaPerluasan220Ha_13.set('fieldAliases', {'Id': 'Id', 'luas_ha': 'luas_ha', });
lyr_BatasGampongKP_14.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Luas': 'Luas', 'kemendagri': 'kemendagri', });
lyr_Kontur_15.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_BANJIR_2.set('fieldImages', {'banjir': 'TextEdit', });
lyr_KARHUTLA_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KARHUTLA': 'TextEdit', });
lyr_KESUBURAN_TANAH_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KESUBURAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TSUNAMI_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RAWAN_TSUN': 'TextEdit', });
lyr_DAS_6.set('fieldImages', {'Id': 'TextEdit', 'Nama_DAS': 'TextEdit', 'Nama_WS': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_GEOLOGI_7.set('fieldImages', {'LONG_TEXT1': 'TextEdit', });
lyr_JENIS_TANAH_8.set('fieldImages', {'DUDAL_SUPR': 'TextEdit', });
lyr_POLARUANG_RTRW_9.set('fieldImages', {'rencana': 'TextEdit', 'Luas_ha': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_HAKATASTANAH_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'WILAYAHID': 'TextEdit', 'WILAYAHIND': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'NOMORVIRTU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AreaKIT_12.set('fieldImages', {'rencana': 'TextEdit', 'Luas_ha': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_AreaPerluasan220Ha_13.set('fieldImages', {'Id': 'Range', 'luas_ha': 'TextEdit', });
lyr_BatasGampongKP_14.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'kemendagri': 'TextEdit', });
lyr_Kontur_15.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_BANJIR_2.set('fieldLabels', {'banjir': 'inline label', });
lyr_KARHUTLA_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'KARHUTLA': 'inline label', });
lyr_KESUBURAN_TANAH_4.set('fieldLabels', {'OBJECTID': 'inline label', 'KESUBURAN': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_TSUNAMI_5.set('fieldLabels', {'OBJECTID': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'RAWAN_TSUN': 'inline label', });
lyr_DAS_6.set('fieldLabels', {'Id': 'inline label', 'Nama_DAS': 'inline label', 'Nama_WS': 'inline label', 'Sumber': 'inline label', });
lyr_GEOLOGI_7.set('fieldLabels', {'LONG_TEXT1': 'inline label', });
lyr_JENIS_TANAH_8.set('fieldLabels', {'DUDAL_SUPR': 'inline label', });
lyr_POLARUANG_RTRW_9.set('fieldLabels', {'rencana': 'inline label', 'Luas_ha': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'inline label', });
lyr_HAKATASTANAH_11.set('fieldLabels', {'OBJECTID': 'inline label', 'ID': 'inline label', 'WILAYAHID': 'inline label', 'WILAYAHIND': 'inline label', 'KODEWILAYA': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'TIPEHAK': 'inline label', 'TIPEPRODUK': 'inline label', 'TAHUN': 'inline label', 'NIB': 'inline label', 'LUASTERTUL': 'inline label', 'LUASPETA': 'inline label', 'NOMORVIRTU': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_AreaKIT_12.set('fieldLabels', {'rencana': 'inline label', 'Luas_ha': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'inline label', });
lyr_AreaPerluasan220Ha_13.set('fieldLabels', {'Id': 'inline label', 'luas_ha': 'inline label', });
lyr_BatasGampongKP_14.set('fieldLabels', {'Id': 'inline label', 'Nama': 'inline label', 'Luas': 'inline label', 'kemendagri': 'inline label', });
lyr_Kontur_15.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'ELEVATION': 'inline label', 'CLOSED_CON': 'inline label', });
lyr_Kontur_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});