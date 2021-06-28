import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';
import ItemCountConteiner from '../ItemCountConteiner/ItemCountConteiner';




export default function ItemDetailContainer() {

    let { paramId } = useParams();
    let [item, setItem] = useState([]);
    let [stock, setStock] = useState(0);

    useEffect(()=> {
        setTimeout(() => {
            let baseDeDatos = [
                {
                    id: "VccZB",
                    modelo: "Asrock. A520M AC",
                    socket: "am4",
                    watts: 35,
                    image: "img/01motherboards/amd/Asrock_A520M_ac_AM4_a6a81c25.jpg",
                    price: 70,
                    stock:15,
                },
                {
                    id: "j7r1z",
                    modelo: "MSI. B450M PRO",
                    socket: "am4",
                    watts: 35,
                    image: "img/01motherboards/amd/MSI_B450M_PRO-M2_MAX.jpg",
                    price: 75,
                    stock:15,
                },
                {
                    id: "8Seoc",
                    modelo: "MSI B550",
                    socket: "am4",
                    watts: 35,
                    image:
                        "img/01motherboards/amd/MSI_MPG_B550_Gaming_Carbon_Wifi_AM4_25ed9711.jpg",
                    price: 220,
                    stock:15,
                },
                {
                    id: "rXjvG",
                    modelo: "ASUS. H310M",
                    socket: "1151",
                    watts: 35,
                    image:
                        "img/01motherboards/intel/ASUS_PRIME_H310M-R_R2.0_1151_OEM_770f9b92.jpg",
                    price: 65,
                    stock:15,
                },
                {
                    id: "fgRS2",
                    modelo: "GIGABYTE. B560M",
                    socket: "1200",
                    watts: 35,
                    image:
                        "img/01motherboards/intel/Gigabyte_B460M-DS3H_AC_WiFi_Socket_1200_10th_Gen.jpg",
                    price: 95,
                    stock:15,
                },
                {
                    id: "1SqKV",
                    modelo: "GIGABYTE. Z490 Vision",
                    socket: "1200",
                    watts: 35,
                    image:
                        "img/01motherboards/intel/Gigabyte_Z490_Vision_G_Socket_1200_10th_Gen.jpg",
                    price: 240,
                    stock:15,
                },
                {
                    id: "W82MC",
                    modelo: "R3 4350G",
                    socket: "am4",
                    watts: 65,
                    image:
                        "img/02procesadores/amd/AMD_Ryzen_3_PRO_4350G_4.0GHz_Turbo___Wraith_Stealth_Cooler_OEM.jpg",
                    price: 220,
                    stock:15,
                },
                {
                    id: "udzE8",
                    modelo: "R5 4650G",
                    socket: "am4",
                    watts: 65,
                    image:
                        "img/02procesadores/amd/AMD_Ryzen_5_PRO_4650G_4.2GHz_Turbo___Wraith_Stealth_Cooler_OEM.jpg",
                    price: 240,
                    stock:15,
                },
                {
                    id: "Cipj9",
                    modelo: "R7 3800X",
                    socket: "am4",
                    watts: 105,
                    image:
                        "img/02procesadores/amd/AMD_RYZEN_7_3800X_4.5GHz_AM4_Wraith_Prism_RGB_Led_Cooler.jpg",
                    price: 390,
                    stock:15,
                },
                {
                    id: "beCRK",
                    modelo: "i3 10100",
                    socket: "1200",
                    watts: 65,
                    image:
                        "img/02procesadores/intel/Intel_Core_i3_10100_4.3GHz__Turbo_10th_Gen_Socket_1200.jpg",
                    price: 120,
                    stock:15,
                },
                {
                    id: "L9apC",
                    modelo: "i5 10400f",
                    socket: "1200",
                    watts: 65,
                    image:
                        "img/02procesadores/intel/Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake.jpg",
                    price: 150,
                    stock:15,
                },
                {
                    id: "586Up",
                    modelo: "i7 10700f",
                    socket: "1200",
                    watts: 65,
                    image:
                        "img/02procesadores/intel/i7_10700F_4.8GHz_Turbo_Socket_1200_Comet_Lake.jpg",
                    price: 330,
                    stock:15,
                },
                {
                    id: "5tQwM",
                    modelo: "AURAFLOW x120",
                    watts: 3,
                    image: "img/03cooler/AURAFLOW__X_120_Intel_1151___AMD_AM4.jpg",
                    price: 80,
                    stock:15,
                },
                {
                    id: "C05Uj",
                    modelo: "SE 903",
                    watts: 3,
                    image: "img/03cooler/Cooler_CPU_ID-Cooling_SE-903-SD.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "wScFp",
                    modelo: "PINKFLOW 240",
                    watts: 3,
                    image: "img/03cooler/CPU_ID-Cooling_PINKFLOW_240_ARGB.jpg",
                    price: 170,
                    stock:15,
                },
                {
                    id: "44KKM",
                    marca: "geil",
                    modelo: "GEIL. EVOx2 3000mhz 8gb",
                    watts: 2,
                    image: "img/04ram/GeiL_DDR4_8GB_3000MHz_EVO_X_II_RGB.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "kJXLr",
                    marca: "oloy",
                    modelo: "OLOY. MARHAWK BLACK 3200mhz 8gb",
                    watts: 2,
                    image: "img/04ram/OLOy_DDR4_8GB_Warhawk_Black_RGB_3200MHz_CL16.jpg",
                    price: 50,
                    stock:15,
                },
                {
                    id: "A3iOJ",
                    marca: "Team",
                    modelo: "TEAM T-FORCE. 2666mhz 8gb",
                    watts: 1.2,
                    image: "img/04ram/Team_DDR4_8GB_2666MHz_T-Force_Zeus.jpg",
                    price: 30,
                    stock:15,
                },
                {
                    id: "3zfqA",
                    marca: "nvidia geforce",
                    modelo: "NVIDIA GEFORCE RTX 3090 24gb",
                    watts: 350,
                    image:
                        "img/05gpu/EVGA_GeForce_RTX_3090_24GB_GDDR6X_XC3_ULTRA_ICX3_ARGB.jpg",
                    price: 1500,
                    stock:15,
                },
                {
                    id: "STOPd",
                    marca: "nvidia geforce",
                    modelo: "GEFORCE RTX 3070 8gb",
                    watts: 220,
                    image: "img/05gpu/GeForce_RTX_3070_8GB_GDDR6_XC3_ULTRA.jpg",
                    price: 370,
                    stock:15,
                },
                {
                    id: "k74dc",
                    marca: "nvidia msi",
                    modelo: "NVIDIA GTX 1600 TI 6gb",
                    watts: 130,
                    image: "img/05gpu/GTX_1660_Ti_6GB_GDDR6_Ventus_XS_OC.jpg",
                    price: 190,
                    stock:15,
                },
                {
                    id: "ejGQF",
                    marca: "radeon",
                    modelo: "RADEON RX 5600 6gb ",
                    watts: 150,
                    image: "img/05gpu/Radeon_RX_5600_XT_6GB_GDDR6_14Gbps_THICC_III_Pro.jpg",
                    price: 280,
                    stock:15,
                },
                {
                    id: "8QoyV",
                    marca: "seagate",
                    modelo: "Barracuda 2tb",
                    watts: 8,
                    image: "img/06ssd/Seagate_2TB_Barracuda_256MB_7.2K_RPM.jpg",
                    price: 55,
                    stock:15,
                },
                {
                    id: "S6GMy",
                    marca: "adata",
                    modelo: "SSD Adata su650",
                    watts: 2,
                    image: "img/06ssd/SSD_Adata_120GB_SU650SS_520MB.jpg",
                    price: 70,
                    stock:15,
                },
                {
                    id: "voidk",
                    marca: "adata",
                    modelo: "SSD Adata su630",
                    watts: 2,
                    image: "img/06ssd/SSD_Adata_960GB_Ultimate_SU630_520MB.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "ga4iw",
                    marca: "glorious",
                    modelo: "Glorious Model D. Glossy",
                    watts: 0,
                    image: "img/07mouse/Glorious_Model_D__Glossy_White.jpg",
                    price: 70,
                    stock:15,
                },
                {
                    id: "bmSF5",
                    marca: "logitech",
                    modelo: "Logitech g600",
                    watts: 0,
                    image: "img/07mouse/Logitech_G600_MMO_Gaming_Black_8200dpi.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "FhUL0",
                    marca: "logitech",
                    modelo: "logitech k600",
                    watts: 4,
                    image: "img/08teclados/Logitech_K600_Touch_Wireless_Smart_TV_HTPC.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "vEBde",
                    marca: "marvo",
                    modelo: "Marvo. Scorpion kg916",
                    watts: 5,
                    image: "img/08teclados/Marvo_Scorpion_KG916_RGB_Rainbow_Switch_Blue.jpg",
                    price: 30,
                    stock:15,
                },
                {
                    id: "pkWFX",
                    marca: "nisuta",
                    modelo: "Nisuta nskbgz 61",
                    watts: 5,
                    image:
                        "img/08teclados/Nisuta_NSKBGZ61W_White_RGB_Gamer_61_Teclas_Switch_Outemu_Brown.jpg",
                    price: 50,
                    stock:15,
                },
                {
                    id: "IPz9T",
                    marca: "deepcool",
                    modelo: "Deepcool Matrexx 55",
                    watts: 0,
                    image: "img/09gabinete/Deepcool_MATREXX_55_MESH_4_Fans_e2000e72-med.jpg",
                    price: 60,
                    stock:15,
                },
                {
                    id: "sPPjd",
                    marca: "cougar",
                    modelo: "Cougar Gemini X",
                    watts: 0,
                    image: "img/09gabinete/Gabinete_Cougar_GEMINI_X.jpg",
                    price: 700,
                    stock:15,
                },
                {
                    id: "qfHnC",
                    marca: "pure_base",
                    modelo: "Pure Base 500dx",
                    watts: 0,
                    image: "img/09gabinete/PURE_BASE_500DX_Black.jpg",
                    price: 100,
                    stock:15,
                },
                {
                    id: "6wAh3",
                    modelo: 'LG 29wl500 29" UltraWide',
                    watts: 20,
                    image:
                        "img/10monitores/LG_29__29WL500_IPS_Ultra_Wide_HDMI_2560x1080_HDR10.jpg",
                    price: 240,
                    stock:15,
                },
                {
                    id: "JfNxt",
                    modelo: 'LG 34gl750 34" Curvo 144hz',
                    watts: 55,
                    image:
                        "img/10monitores/LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms.jpg",
                    price: 330,
                    stock:15,
                },
                {
                    id: "9xJrD",
                    modelo: 'LG 22" 22mn430h IPS ',
                    watts: 20,
                    image: "img/10monitores/Monitor_LG_22__22MN430H-B_HDMI_Full_HD_IPS.jpg",
                    price: 220,
                    stock:15,
                },
                {
                    id: "X8n7M",
                    modelo: 'Samsung 24" f390 Curvo',
                    watts: 25,
                    image: "img/10monitores/Monitor_Samsung_24___Curvo_F390.jpg",
                    price: 190,
                    stock:15,
                },
                {
                    id: "vws9e",
                    modelo: "Gigabyte 450w 80+ P450B",
                    watts: 0,
                    image: "img/11fuentes/Gigabyte_450W_80_Plus_Bronce.jpg",
                    price: 40,
                    stock:15,
                },
                {
                    id: "PkYav",
                    modelo: "Gamemax 500W 80+ vp-500",
                    watts: 0,
                    image: "img/11fuentes/Gamemax_500W_80_Plus_Bronze_VP-500.jpg",
                    price: 60,
                    stock:15,
                },
                {
                    id: "xKcNI",
                    modelo: "Redragon 600w 80+ GC-PS002",
                    watts: 0,
                    image: "img/11fuentes/Redragon_600W_80__Bronze_GC-PS002.jpg",
                    price: 70,
                    stock:15,
                },
                {
                    id: "OU8J7",
                    modelo: "Seasonic 850w 80+ Gold GX-850",
                    watts: 0,
                    image: "img/11fuentes/Seasonic_850W_Focus_Gold_GX-850_80_Plus_Gold.jpg",
                    price: 150,
                    stock:15,
                },
            ];
            let filtrado = baseDeDatos.find((i)=> i.id === paramId )
            setItem(filtrado)
        }, 1500);
    },[paramId])
    

    return (
        <Container>
            {
                item.length===0 ?
                <CircularProgress color='secondary'/> :
                <div className='ItemInfo'>
                    <ItemDetail props={item}/>   
                    <ItemCountConteiner props={item}/>
                </div>
            }
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    padding: 2em;

    .ItemInfo {
        justify-content: center;
        display: flex;
        margin: 5em 0;
    }
`