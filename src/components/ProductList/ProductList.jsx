import React, {useState} from 'react';
import './ProductList.css';
import {Form} from "react-router-dom";
import Button from "../Button/Button";

const products = {
    'data': [
        {
            'id': 32025579,
            'code': '00045',
            'title': 'Jeep Grand Cherokee/Cherokee 19-21',
            'image': [
                'https://storage.remonline.app/warehouse_images/57e8753246fe4d4d90fd63f9735582f9_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/ae3b5256b3b7435887e29b832fa0c118_500_500.jpeg?'
            ],
            'price': {
                '284726': 1300.0,
                '284727': 1160.0,
                '289284': 1050.0
            },
            'article': 'b27f8e24-08a8-11ec-0a80-0851001fa78b',
            'residue': 10.0,
            'category': {
                'id': 753896,
                'title': 'Jeep',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025580,
            'code': '00011',
            'title': '������� 60��',
            'image': [
                'https://storage.remonline.app/warehouse_images/ccc026ec1c964401b3a3fac68be002f6_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': '44872529-0751-11ec-0a80-06470012a068',
            'residue': 0.0,
            'category': {
                'id': 753897,
                'title': '�������� ( ����� )',
                'parent_id': 754100
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025581,
            'code': '00116',
            'title': '�� �������/���� 150�� �� 20��',
            'image': [],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': '2c0544e7-3a6e-11ec-0a80-001000263775',
            'residue': 0.0,
            'category': {
                'id': 753898,
                'title': '�� � ����/�������',
                'parent_id': 754101
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025582,
            'code': '00140',
            'title': '�� �������/���� 200�� �� 25��',
            'image': [
                'https://storage.remonline.app/warehouse_images/6ddf2b79b9c248ca947474c11a34025d_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '3ed89a6d-599e-11ec-0a80-07d3000b327c',
            'residue': 0.0,
            'category': {
                'id': 753898,
                'title': '�� � ����/�������',
                'parent_id': 754101
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025583,
            'code': '00008',
            'title': '������� � �����',
            'image': [
                'https://storage.remonline.app/warehouse_images/7e57ac5f36494f82bebf58e28b6d7d83_500_500.jpeg?'
            ],
            'price': {
                '284726': 80.0,
                '284727': 60.0,
                '289284': 55.0
            },
            'article': '64b832c9-0739-11ec-0a80-0dd6000f95f6',
            'residue': 170.0,
            'category': {
                'id': 753899,
                'title': '�������� ��� ������',
                'parent_id': 754100
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025584,
            'code': '�470',
            'title': '������ �������',
            'image': [
                'https://storage.remonline.app/warehouse_images/08860bb0d50c4310a67487bb6b1909ea_500_500.jpeg?'
            ],
            'price': {
                '284726': 17.0,
                '284727': 15.0,
                '289284': 14.0
            },
            'article': '08b254c3-4e01-11ed-0a80-03de00323180',
            'residue': 53.0,
            'category': {
                'id': 753899,
                'title': '�������� ��� ������',
                'parent_id': 754100
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025585,
            'code': '�472',
            'title': '�������� � �������������� Toyota, Hyundai',
            'image': [
                'https://storage.remonline.app/warehouse_images/045f22dc991c4ab4b5afd4f57b72e37b_500_500.jpeg?'
            ],
            'price': {
                '284726': 100.0,
                '284727': 80.0,
                '289284': 60.0
            },
            'article': '2dc9f50c-4e02-11ed-0a80-023800311aa0',
            'residue': 10.0,
            'category': {
                'id': 753899,
                'title': '�������� ��� ������',
                'parent_id': 754100
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025586,
            'code': '00143',
            'title': 'Hyundai Sonata 9 15-17',
            'image': [
                'https://storage.remonline.app/warehouse_images/e9d4158d1cee4edda681c0710a406d4e_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/db77c4983f4d48d2bf8e1f5ce7a2b220_500_500.jpeg?'
            ],
            'price': {
                '284726': 1090.0,
                '284727': 1010.0,
                '289284': 850.0
            },
            'article': '8246073a-641f-11ec-0a80-00c40046c2c4',
            'residue': 3.0,
            'category': {
                'id': 753900,
                'title': 'Hyundai',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025587,
            'code': '00095',
            'title': 'Lexus NX 14-19, RC 15-17, CT 200H, IS 250 14-17, IS 300 14-17',
            'image': [
                'https://storage.remonline.app/warehouse_images/aa4c543c7e9c425f8976b002a316394f_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/9b79e88050ef436ea9c0c74d92983959_500_500.jpeg?'
            ],
            'price': {
                '284726': 1160.0,
                '284727': 1090.0,
                '289284': 950.0
            },
            'article': '67e56734-27a9-11ec-0a80-069f0000fa9b',
            'residue': 1.0,
            'category': {
                'id': 753901,
                'title': 'Lexus',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025588,
            'code': '00109',
            'title': 'Audi Q3 2019-2020, Q5 2019-2020',
            'image': [
                'https://storage.remonline.app/warehouse_images/5fba8d3790d04ba1b120287a4b1a7113_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/7f808a5db23a41058a8ff2454e48af8d_500_500.jpeg?'
            ],
            'price': {
                '284726': 1140.0,
                '284727': 1050.0,
                '289284': 950.0
            },
            'article': '856541b0-3346-11ec-0a80-051e00255fc7',
            'residue': 5.0,
            'category': {
                'id': 753902,
                'title': 'Audi',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025589,
            'code': '00142',
            'title': 'Audi A3 15-16, A4 13-16, Q3 13-18, Q5 14-17',
            'image': [
                'https://storage.remonline.app/warehouse_images/407b9c233331485dbd89f33a3c4c2ffb_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/b50ca715c73e4ad09d771e27f3648dbf_500_500.jpeg?'
            ],
            'price': {
                '284726': 1160.0,
                '284727': 1070.0,
                '289284': 950.0
            },
            'article': '2a5eb009-641f-11ec-0a80-04fe00473bd3',
            'residue': 0.0,
            'category': {
                'id': 753902,
                'title': 'Audi',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025590,
            'code': '00124',
            'title': 'Audi A1 11-15, A3, A4, A6 16-18, Q3, Q5, Q7',
            'image': [
                'https://storage.remonline.app/warehouse_images/62656a7113b14c749aad566e9fbe79f1_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/35855dad85c2421eb430d036f2753f88_500_500.jpeg?'
            ],
            'price': {
                '284726': 1160.0,
                '284727': 1070.0,
                '289284': 950.0
            },
            'article': '9a103953-3f3c-11ec-0a80-0d80000be33d',
            'residue': 2.0,
            'category': {
                'id': 753902,
                'title': 'Audi',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025591,
            'code': '00077',
            'title': 'Acura TL, RDX 13-18, ILX 12-19',
            'image': [
                'https://storage.remonline.app/warehouse_images/f4c8f120adeb43eb86e251436c04fc2e_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/2cc338a105824632b3d6d2cda16fad6f_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': 'ee20a162-1e2f-11ec-0a80-082700324cf6',
            'residue': 0.0,
            'category': {
                'id': 753903,
                'title': 'Acura',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025592,
            'code': '�456',
            'title': 'BMW I3 ������ ��������',
            'image': [
                'https://storage.remonline.app/warehouse_images/62efc2a4742d45f9bae9c1a42e9c31a4_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/9cb574f999cb45cbafc5cc300c8dd2d6_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': '7cf7ae28-35f0-11ed-0a80-0bbb001603fb',
            'residue': 0.0,
            'category': {
                'id': 753904,
                'title': 'BMW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025593,
            'code': '�457',
            'title': 'BMW I3 ��� ��������',
            'image': [],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': 'a0d2c723-35f0-11ed-0a80-05930016787d',
            'residue': 0.0,
            'category': {
                'id': 753904,
                'title': 'BMW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025594,
            'code': '�455',
            'title': 'BMW E90, E93, X1 08-15 M ��������',
            'image': [
                'https://storage.remonline.app/warehouse_images/f3aeeeff2bfb451aa62995cdd06aed57_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/809845b7185845d6972cc354b0e8614f_500_500.jpeg?'
            ],
            'price': {
                '284726': 1600.0,
                '284727': 1400.0,
                '289284': 1100.0
            },
            'article': '9158ede7-35ef-11ed-0a80-047f00151222',
            'residue': 0.0,
            'category': {
                'id': 753904,
                'title': 'BMW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025595,
            'code': '00138',
            'title': 'Dodge Durango 16-18, Charger 16-19',
            'image': [
                'https://storage.remonline.app/warehouse_images/560c8c4ff44340029f22f69be2fbe398_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/c2bf87dba82e4f2286578f9fe294d722_500_500.jpeg?'
            ],
            'price': {
                '284726': 1200.0,
                '284727': 1130.0,
                '289284': 1050.0
            },
            'article': '4ba6733c-599d-11ec-0a80-05a1000ae1cf',
            'residue': 3.0,
            'category': {
                'id': 753905,
                'title': 'Dodge',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025596,
            'code': '00122',
            'title': 'Buick Envision 2017+',
            'image': [
                'https://storage.remonline.app/warehouse_images/57974fc31ded4823a73e3ef61128d2c2_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/3df9516ca52c4b94b5c45da73c4fb02f_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': 'f54687ef-3f3b-11ec-0a80-0149003d8a18',
            'residue': 0.0,
            'category': {
                'id': 753906,
                'title': 'Buick',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025597,
            'code': '00038',
            'title': 'Chevrolet Volt 16-18, Malibu 16-19, Bolt EV 16-19, Equinox (������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/efebd8302f9f44fc8ffcb3dcfe094fe6_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/2c246d86341843a4b0e57cb32560a597_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '4d5a6977-089d-11ec-0a80-0647001f45c5',
            'residue': 0.0,
            'category': {
                'id': 753907,
                'title': 'Chevrolet',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025598,
            'code': '00126',
            'title': 'Chevrolet Cruze 2016-2019',
            'image': [
                'https://storage.remonline.app/warehouse_images/06b1a1b0beea4876b2a2f1901ab2bdbc_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/829a9da8edb94697b06dd9d0525c705c_500_500.jpeg?'
            ],
            'price': {
                '284726': 1090.0,
                '284727': 990.0,
                '289284': 850.0
            },
            'article': 'a68bc8c9-4d63-11ec-0a80-04ad0001e3c4',
            'residue': 1.0,
            'category': {
                'id': 753907,
                'title': 'Chevrolet',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025599,
            'code': '00039',
            'title': 'Dodge Dart 13-16, Caravan 13-18, Durango 11-13, Journey 12-17',
            'image': [
                'https://storage.remonline.app/warehouse_images/6c13fa8ceb0544b2b98e89b26f57c6ec_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/eaab414b0c144c739829d68536b17efc_500_500.jpeg?'
            ],
            'price': {
                '284726': 1130.0,
                '284727': 1040.0,
                '289284': 900.0
            },
            'article': 'ae980726-089d-11ec-0a80-0967001f4f37',
            'residue': 1.0,
            'category': {
                'id': 753905,
                'title': 'Dodge',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025600,
            'code': '00042',
            'title': 'Ford Fusion 13-18, EDGE 15-19, Mondeo 14-19, Galaxy 15-19, S-Max 15-17',
            'image': [
                'https://storage.remonline.app/warehouse_images/fb41c9db9d3f48e39875e63b15dfe530_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/aebd155b65614ecfad459d43ad92bff0_500_500.jpeg?'
            ],
            'price': {
                '284726': 1080.0,
                '284727': 1010.0,
                '289284': 850.0
            },
            'article': '05da06a0-089f-11ec-0a80-012d001f6539',
            'residue': 34.0,
            'category': {
                'id': 753908,
                'title': 'Ford',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025601,
            'code': '00093',
            'title': 'Honda Accord 2013-2017, Pilot 16-18, Odyssey 11-15',
            'image': [
                'https://storage.remonline.app/warehouse_images/45858dbdd9154feb8319626876b6de0c_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/b0c947a4e42a4bc5871091b3e9e3bdb5_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': 'ac290035-27a8-11ec-0a80-09150000f37c',
            'residue': 0.0,
            'category': {
                'id': 753909,
                'title': 'Honda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025602,
            'code': '�458',
            'title': 'Honda Accord 10 2018+ ��������',
            'image': [
                'https://storage.remonline.app/warehouse_images/2249e01ebfbd4cf7851f6ff17839e599_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/0dc90a465b53420185de99f3650068f9_500_500.jpeg?'
            ],
            'price': {
                '284726': 1600.0,
                '284727': 1400.0,
                '289284': 1200.0
            },
            'article': '4deb97c3-35f1-11ed-0a80-02940015cb0d',
            'residue': 0.0,
            'category': {
                'id': 753909,
                'title': 'Honda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025603,
            'code': '00066',
            'title': 'Hyundai Elantra 17-18 AD, Accent 17-18',
            'image': [
                'https://storage.remonline.app/warehouse_images/0bf96b9988134c61814c60140e101fb1_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/2bef46cae0204f008272171895d388f6_500_500.jpeg?'
            ],
            'price': {
                '284726': 1090.0,
                '284727': 990.0,
                '289284': 850.0
            },
            'article': '21899d5b-1de8-11ec-0a80-02a2002d8b21',
            'residue': 11.0,
            'category': {
                'id': 753900,
                'title': 'Hyundai',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025604,
            'code': '00044',
            'title': 'Jeep Renegade 15-18',
            'image': [
                'https://storage.remonline.app/warehouse_images/e974d61627014f7787ad0392ddd58d81_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/dff76021c4be4add9b743fc0df18f2e2_500_500.jpeg?'
            ],
            'price': {
                '284726': 1300.0,
                '284727': 1230.0,
                '289284': 1100.0
            },
            'article': 'baa143aa-08a7-11ec-0a80-06470020099a',
            'residue': 0.0,
            'category': {
                'id': 753896,
                'title': 'Jeep',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025605,
            'code': '00043',
            'title': 'Jeep Compass new 2017-2021',
            'image': [
                'https://storage.remonline.app/warehouse_images/34972a8639a6413aade28ef00d56904e_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/fa32d7e7fbc04e0e88662a95818ff647_500_500.jpeg?'
            ],
            'price': {
                '284726': 1300.0,
                '284727': 1230.0,
                '289284': 1100.0
            },
            'article': '76b75bc8-08a7-11ec-0a80-02d5001f71af',
            'residue': 0.0,
            'category': {
                'id': 753896,
                'title': 'Jeep',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025606,
            'code': '00137',
            'title': 'Jeep Compass 11-17, Patriot 11-17, Wrangler 11-18',
            'image': [
                'https://storage.remonline.app/warehouse_images/e9e92bda05b546e0b8fbf04e44ff3ea1_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/7834a4f969814f18b8c760a4731350c6_500_500.jpeg?'
            ],
            'price': {
                '284726': 1200.0,
                '284727': 1130.0,
                '289284': 1050.0
            },
            'article': '02536cf1-599d-11ec-0a80-0990000adbed',
            'residue': 1.0,
            'category': {
                'id': 753896,
                'title': 'Jeep',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025607,
            'code': '00047',
            'title': 'Lexus RX, ES, LX 16-19 Black',
            'image': [
                'https://storage.remonline.app/warehouse_images/b4d0d8de4ab249c4b48f34d4974d4b34_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/d6fbd800322d411a9766ad79e918cf1d_500_500.jpeg?'
            ],
            'price': {
                '284726': 1230.0,
                '284727': 1160.0,
                '289284': 950.0
            },
            'article': 'd368324d-08a9-11ec-0a80-012d0020250e',
            'residue': 1.0,
            'category': {
                'id': 753901,
                'title': 'Lexus',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025608,
            'code': '00048',
            'title': 'Lexus RX,ES, LX 16-19 Brown',
            'image': [
                'https://storage.remonline.app/warehouse_images/5d552e8ee19a4def9708642cbe77c340_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/f6c604e2f8c14dd6902948ec30c63d9a_500_500.jpeg?'
            ],
            'price': {
                '284726': 1370.0,
                '284727': 1160.0,
                '289284': 980.0
            },
            'article': '0e42834d-08aa-11ec-0a80-02d5001f9776',
            'residue': 5.0,
            'category': {
                'id': 753901,
                'title': 'Lexus',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025609,
            'code': '00099',
            'title': 'Lincoln MKZ 13-16',
            'image': [
                'https://storage.remonline.app/warehouse_images/dfeeefac4bd2461b90ac03e39ab5590e_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/e3ec7d60a4e04fa9a655c4a12312fe63_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '57277ef9-28f0-11ec-0a80-08630005a953',
            'residue': 0.0,
            'category': {
                'id': 753910,
                'title': 'Lincoln',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025610,
            'code': '00056',
            'title': 'Mitsubishi Outlander 14-18, ASX 13-19, L200, Eclipse, Mirage, Outlander sport',
            'image': [
                'https://storage.remonline.app/warehouse_images/625013cb8196452da3dce10c534bd8a3_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/74a8b8baf2f94595b3a64ad34b258de7_500_500.jpeg?'
            ],
            'price': {
                '284726': 1220.0,
                '284727': 1070.0,
                '289284': 950.0
            },
            'article': '2e272360-08af-11ec-0a80-0dd600201f48',
            'residue': 1.0,
            'category': {
                'id': 753911,
                'title': 'Mitsubishi',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025611,
            'code': '00054',
            'title': 'Mazda 6, CX9 16-20 Chrome (Type 2)',
            'image': [
                'https://storage.remonline.app/warehouse_images/57081a825608459d9386ab694728f273_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/01d7648762e3412aa4675020d529bd6b_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': 'f407e3ee-08ad-11ec-0a80-0dd600200a1b',
            'residue': 0.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025612,
            'code': '00052',
            'title': 'Mazda 6, CX4 11-17 (�������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/9622cde737fb46cd9be8789ebae1fa4f_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/6d69fc2b2fe04c188ae8fbacc84fc879_500_500.jpeg?'
            ],
            'price': {
                '284726': 1150.0,
                '284727': 1070.0,
                '289284': 900.0
            },
            'article': 'f22dd32e-08ac-11ec-0a80-056e00203aab',
            'residue': 6.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025613,
            'code': '00051',
            'title': 'Mazda 3 new 19-20 Chrome',
            'image': [
                'https://storage.remonline.app/warehouse_images/795ba7a6398141fc9554fdb191a131e0_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/0903418b92fd448d9323e8a1fc8ee356_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '440cb132-08ac-11ec-0a80-056e00202d6d',
            'residue': 0.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025614,
            'code': '00055',
            'title': 'Mazda 3, CX5 17-20 Chrome (Type 1)',
            'image': [
                'https://storage.remonline.app/warehouse_images/e5504a7fc39f4dd0b20fd5e3d1269eb5_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/c6a8468c9e4b421fb25bc8ad0c3948b4_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '4c46865f-08ae-11ec-0a80-085100201018',
            'residue': 0.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025615,
            'code': '00049',
            'title': 'Mazda 3, CX5 2017+ (�������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/7b74f228ef364ff9af5deea904aa7065_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/9b7929a15cc34e108eee1daee4f5901f_500_500.jpeg?'
            ],
            'price': {
                '284726': 1150.0,
                '284727': 1080.0,
                '289284': 850.0
            },
            'article': 'f60ca2dc-08aa-11ec-0a80-0851001fd17c',
            'residue': 41.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025616,
            'code': '00060',
            'title': 'Nissan Rogue 17-20 Rest, Leaf 18-19, Kicks 18-20, Altima 19, Qashqai 18-19, X-Trail 18-19, Rogue Sport 17-20',
            'image': [
                'https://storage.remonline.app/warehouse_images/d224fab565ec43fa89615557f28dee72_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/c6f79136418748a4ac7e5b3a49d92e0d_500_500.jpeg?'
            ],
            'price': {
                '284726': 1080.0,
                '284727': 960.0,
                '289284': 850.0
            },
            'article': '1be48bbb-08b2-11ec-0a80-03da002203da',
            'residue': 1.0,
            'category': {
                'id': 753913,
                'title': 'Nissan',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025617,
            'code': '00120',
            'title': 'Mazda 3 new 19-20',
            'image': [
                'https://storage.remonline.app/warehouse_images/7be5ab1ccfc945c5aa18ffeca6fb156b_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/1cb81464c592410a8172611a5c06d925_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': '6b0df202-3f3b-11ec-0a80-052b003ff4fd',
            'residue': 1.0,
            'category': {
                'id': 753912,
                'title': 'Mazda',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025618,
            'code': '00059',
            'title': 'Nissan Rogue 14-16 DoRest, Altima 12-18, Teana 14-18, X-Trail 15-16 Black',
            'image': [
                'https://storage.remonline.app/warehouse_images/f844f30498674f839e44e5f18942b49c_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/317114049aeb4887ac9a309546c2cfb2_500_500.jpeg?'
            ],
            'price': {
                '284726': 1080.0,
                '284727': 990.0,
                '289284': 900.0
            },
            'article': '96a342cb-08b1-11ec-0a80-085100204b52',
            'residue': 0.0,
            'category': {
                'id': 753913,
                'title': 'Nissan',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025619,
            'code': '00110',
            'title': 'Nissan Murano 2015-2019, Pathfinder 2014-2019',
            'image': [
                'https://storage.remonline.app/warehouse_images/6b9b6b047bb446b9bceb4f6030df8a4a_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/c5c0397d65944657b475714bd06fab66_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': 'd15d654c-3346-11ec-0a80-03df00265879',
            'residue': 0.0,
            'category': {
                'id': 753913,
                'title': 'Nissan',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025620,
            'code': '00125',
            'title': 'Nissan Maxima 2018-2019',
            'image': [
                'https://storage.remonline.app/warehouse_images/92f60179d30f4bf8adeb06649a7fe739_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/784fa00e81c4449cb20ec14e2cbe4ac6_500_500.jpeg?'
            ],
            'price': {
                '284726': 1120.0,
                '284727': 1040.0,
                '289284': 950.0
            },
            'article': '453f65e0-4d63-11ec-0a80-09b50001eeaf',
            'residue': 3.0,
            'category': {
                'id': 753913,
                'title': 'Nissan',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025621,
            'code': '00062',
            'title': 'Subaru Legacy 18-19, Ascent 18-20, Forester 19-20, XV 18-19, Outback 18-19 (�������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/53cb95e4776e403fbd792048cf370387_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/6ec85968223744c591a5f3bf8a47a6cc_500_500.jpeg?'
            ],
            'price': {
                '284726': 1120.0,
                '284727': 1040.0,
                '289284': 950.0
            },
            'article': '3a2d6d79-08b3-11ec-0a80-056e0020b78c',
            'residue': 0.0,
            'category': {
                'id': 753914,
                'title': 'Subaru',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025622,
            'code': '00111',
            'title': 'Subaru Impreza Forester 14-16, XV 13-14, Outback 12-14, Legacy 12-14',
            'image': [
                'https://storage.remonline.app/warehouse_images/1360ed02682a42c8b3193ae266a4933d_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/65da15a37a094d95aae5ca12f9a30cdb_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': '4a124585-3347-11ec-0a80-00f80026d752',
            'residue': 1.0,
            'category': {
                'id': 753914,
                'title': 'Subaru',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025623,
            'code': '00061',
            'title': 'Subaru Forester 4 16-18, Outback 15-17, XV 15-17 (�������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/9f1204e21c4f4beeaaeb5a25faaf26b0_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/c82b358804d842b4b567d1fc1eedc63b_500_500.jpeg?'
            ],
            'price': {
                '284726': 0.0,
                '284727': 0.0,
                '289284': 0.0
            },
            'article': 'dc0db723-08b2-11ec-0a80-056e0020b12f',
            'residue': 1.0,
            'category': {
                'id': 753914,
                'title': 'Subaru',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025624,
            'code': '�467',
            'title': 'Toyota Rav 4 2012-2018',
            'image': [],
            'price': {
                '284726': 1200.0,
                '284727': 1080.0,
                '289284': 1000.0
            },
            'article': 'dfb3d32e-4180-11ed-0a80-02c2001b86a2',
            'residue': 0.0,
            'category': {
                'id': 753915,
                'title': 'Toyota',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025625,
            'code': '00064',
            'title': 'VW Touareg 11-17 Black',
            'image': [
                'https://storage.remonline.app/warehouse_images/3744cf5451de4b59b1532ded47e0861a_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/aa7c66ad114845e59f1f777cdc87e360_500_500.jpeg?'
            ],
            'price': {
                '284726': 1300.0,
                '284727': 1160.0,
                '289284': 1000.0
            },
            'article': 'f929954d-08b4-11ec-0a80-0dd600208b30',
            'residue': 4.0,
            'category': {
                'id': 753916,
                'title': 'VW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025626,
            'code': '00065',
            'title': 'VW Tiguan 11-16, Jetta (��� ������)',
            'image': [
                'https://storage.remonline.app/warehouse_images/2c04ed9c87bc40648818eeb51423655a_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/eba75c652443476c8ec960d92138e6a4_500_500.jpeg?'
            ],
            'price': {
                '284726': 1150.0,
                '284727': 1010.0,
                '289284': 950.0
            },
            'article': '4d57cb7a-08b5-11ec-0a80-085100208eb2',
            'residue': 1.0,
            'category': {
                'id': 753916,
                'title': 'VW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025627,
            'code': '�459',
            'title': 'VW Passat B8 16-18, �������� Caddy 16-19, Sharan 16-19, Tiguan 17-19, Polo 15-19, Jetta Rest 15-18, Touran 15-18',
            'image': [],
            'price': {
                '284726': 1500.0,
                '284727': 1300.0,
                '289284': 1100.0
            },
            'article': '867264c5-35f1-11ed-0a80-0593001683ce',
            'residue': 0.0,
            'category': {
                'id': 753916,
                'title': 'VW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        },
        {
            'id': 32025628,
            'code': '00058',
            'title': 'VW Passat B8 16-18, Caddy 16-19, Sharan 16-19, Tiguan 17-19, Polo 15-19, Jetta Rest 15-18, Touran 15-18',
            'image': [
                'https://storage.remonline.app/warehouse_images/645c5317058d4aa89725b90c2dd1f88a_500_500.jpeg?',
                'https://storage.remonline.app/warehouse_images/02472064d55046d792f2517356043db7_500_500.jpeg?'
            ],
            'price': {
                '284726': 0,
                '284727': 0,
                '289284': 0.0
            },
            'article': '8ff13b31-08b0-11ec-0a80-056e00207377',
            'residue': 0.0,
            'category': {
                'id': 753916,
                'title': 'VW',
                'parent_id': 754099
            },
            'description': '',
            'custom_fields': {},
            'warranty': 0,
            'warranty_period': 0
        }
    ],
    'page': 1,
    'count': 205,
    'success': true
}



const ProductList = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    return (
        <div className={"form"}>
            <h3>Выбирайте любые подходящие вам товары. Покупайте не выходя из Telegram!</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Поиск'}
                value={search}
                onChange={onSearch}
                />
            <select value={category} onChange={onChangeCategory} className={'select'}>
                <option value={'1'}>Категория 1</option>
                <option value={'2'}>Категория 2</option>
                <option value={'3'}>Категория 1.1</option>
                <option value={'3'}>Категория 1.2</option>
            </select>

            <div className={"postlist"}>
                <div className={'post'}>
                    <img src="https://storage.remonline.app/warehouse_images/fb41c9db9d3f48e39875e63b15dfe530_500_500.jpeg?"/>
                    Название какого-то товара<p/>
                    <Button>В корзину</Button>
                </div>
                <div className={'post'}>
                    <img src="https://storage.remonline.app/warehouse_images/9f1204e21c4f4beeaaeb5a25faaf26b0_500_500.jpeg?"/>
                    Название какого-то товара
                    <Button>В корзину</Button>
                </div>


            </div>


        </div>


    );
};

export default ProductList;

