<template>
    <div class="o-time">
        <div class="o-time__outer">
            <div class="o-time__inner">
                <span class="o-time__headline">Místní čas</span>
                <span class="o-time__time">{{ localTime }}</span>
                <span class="o-time__date">{{ localDate }}</span>
                <span class="o-time__difference" v-if="local !== null && czech !== null && mpz !== 'CZ'">{{ timeDifferenceMessage }}</span>
                <span class="o-time__home" v-if="mpz !== 'CZ'">(V Česku je {{ czechTime }} {{ czechDate }})</span>
            </div>
        </div>
    </div>
</template>
  
<script>
    import moment from 'moment-timezone'
    import 'moment/locale/cs'
    moment.locale('cs')
  
    export default defineComponent({
        name: 'OrganismsoTimeComponent',

        props: {
            mpz: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                local: null,
                localTime: null,
                localDate: null,
                czech: null,
                czechTime: null,
                czechDate: null
            }
        },

        computed: {
            timeDifferenceMessage() {
                const localMoment = moment(this.local, 'HH:mm DD.MMMM YYYY')
                const czechMoment = moment(this.czech, 'HH:mm DD.MMMM YYYY')

                if (localMoment.isValid() && czechMoment.isValid()) {
                    const timeDifference = localMoment.diff(czechMoment, 'hours')
                    
                    if (timeDifference > 0) {
                        return `Místní čas je o ${timeDifference} hodin dopředu oproti Česku.`
                    } else if (timeDifference < 0) {
                        return `Místní čas je o ${Math.abs(timeDifference)} hodin dozadu oproti Česku.`
                    } else if (timeDifference === 0) {
                        return 'Místní čas je stejný jako čas v Česku.'
                    }
                } else {
                    return 'Chyba při analýze času.'
                }
            }
        },

        watch: {
            mpz: {
                immediate: true,
                handler(newVal) {
                    this.getLocalTimeFromState(newVal)
                }
            }
        },

        methods: {
            getLocalTimeFromState(mpz) {
                const stateTimezoneMap = {
                    'AD': 'Europe/Andorra',
                    'AE': 'Asia/Dubai',
                    'AF': 'Asia/Kabul',
                    'AG': 'America/Antigua',
                    'AI': 'America/Anguilla',
                    'AL': 'Europe/Tirane',
                    'AM': 'Asia/Yerevan',
                    'AO': 'Africa/Luanda',
                    'AQ': 'Antarctica/Casey',
                    'AR': 'America/Argentina/Buenos_Aires',
                    'AS': 'Pacific/Pago_Pago',
                    'AT': 'Europe/Vienna',
                    'AU': 'Australia/Sydney',
                    'AW': 'America/Aruba',
                    'AX': 'Europe/Mariehamn',
                    'AZ': 'Asia/Baku',
                    'BA': 'Europe/Sarajevo',
                    'BB': 'America/Barbados',
                    'BD': 'Asia/Dhaka',
                    'BE': 'Europe/Brussels',
                    'BF': 'Africa/Ouagadougou',
                    'BG': 'Europe/Sofia',
                    'BH': 'Asia/Bahrain',
                    'BI': 'Africa/Bujumbura',
                    'BJ': 'Africa/Porto-Novo',
                    'BL': 'America/St_Barthelemy',
                    'BM': 'Atlantic/Bermuda',
                    'BN': 'Asia/Brunei',
                    'BO': 'America/La_Paz',
                    'BQ': 'America/Kralendijk',
                    'BR': 'America/Sao_Paulo',
                    'BS': 'America/Nassau',
                    'BT': 'Asia/Thimphu',
                    'BV': 'Europe/Oslo',//'BV': 'Antarctica/Bouvet_Island',
                    'BW': 'Africa/Gaborone',
                    'BY': 'Europe/Minsk',
                    'BZ': 'America/Belize',
                    'CA': 'America/Toronto',
                    'CC': 'Indian/Cocos',
                    'CD': 'Africa/Kinshasa',
                    'CF': 'Africa/Bangui',
                    'CG': 'Africa/Brazzaville',
                    'CH': 'Europe/Zurich',
                    'CI': 'Africa/Abidjan',
                    'CK': 'Pacific/Rarotonga',
                    'CL': 'America/Santiago',
                    'CM': 'Africa/Douala',
                    'CN': 'Asia/Shanghai',
                    'CO': 'America/Bogota',
                    'CR': 'America/Costa_Rica',
                    'CU': 'America/Havana',
                    'CV': 'Atlantic/Cape_Verde',
                    'CW': 'America/Curacao',
                    'CX': 'Indian/Christmas',
                    'CY': 'Asia/Nicosia',
                    'CZ': 'Europe/Prague',
                    'DE': 'Europe/Berlin',
                    'DJ': 'Africa/Djibouti',
                    'DK': 'Europe/Copenhagen',
                    'DM': 'America/Dominica',
                    'DO': 'America/Santo_Domingo',
                    'DZ': 'Africa/Algiers',
                    'EC': 'America/Guayaquil',
                    'EE': 'Europe/Tallinn',
                    'EG': 'Africa/Cairo',
                    'EH': 'Africa/El_Aaiun',
                    'ER': 'Africa/Asmara',
                    'ES': 'Europe/Madrid',
                    'ET': 'Africa/Addis_Ababa',
                    'FI': 'Europe/Helsinki',
                    'FJ': 'Pacific/Fiji',
                    'FK': 'Atlantic/Stanley',
                    'FM': 'Pacific/Chuuk',
                    'FO': 'Atlantic/Faroe',
                    'FR': 'Europe/Paris',
                    'GA': 'Africa/Libreville',
                    'GB': 'Europe/London',
                    'GD': 'America/Grenada',
                    'GE': 'Asia/Tbilisi',
                    'GF': 'America/Cayenne',
                    'GG': 'Europe/Guernsey',
                    'GH': 'Africa/Accra',
                    'GI': 'Europe/Gibraltar',
                    'GL': 'America/Godthab',
                    'GM': 'Africa/Banjul',
                    'GN': 'Africa/Conakry',
                    'GP': 'America/Guadeloupe',
                    'GQ': 'Africa/Malabo',
                    'GR': 'Europe/Athens',
                    'GS': 'Atlantic/South_Georgia',
                    'GT': 'America/Guatemala',
                    'GU': 'Pacific/Guam',
                    'GW': 'Africa/Bissau',
                    'GY': 'America/Guyana',
                    'HK': 'Asia/Hong_Kong',
                    'HM': 'Indian/Kerguelen',
                    'HN': 'America/Tegucigalpa',
                    'HR': 'Europe/Zagreb',
                    'HT': 'America/Port-au-Prince',
                    'HU': 'Europe/Budapest',
                    'ID': 'Asia/Jakarta',
                    'IE': 'Europe/Dublin',
                    'IL': 'Asia/Jerusalem',
                    'IM': 'Europe/Isle_of_Man',
                    'IN': 'Asia/Kolkata',
                    'IO': 'Indian/Chagos',
                    'IQ': 'Asia/Baghdad',
                    'IR': 'Asia/Tehran',
                    'IS': 'Atlantic/Reykjavik',
                    'IT': 'Europe/Rome',
                    'JE': 'Europe/Jersey',
                    'JM': 'America/Jamaica',
                    'JO': 'Asia/Amman',
                    'JP': 'Asia/Tokyo',
                    'KE': 'Africa/Nairobi',
                    'KG': 'Asia/Bishkek',
                    'KH': 'Asia/Phnom_Penh',
                    'KI': 'Pacific/Kiritimati',
                    'KM': 'Indian/Comoro',
                    'KN': 'America/St_Kitts',
                    'KP': 'Asia/Pyongyang',
                    'KR': 'Asia/Seoul',
                    'KW': 'Asia/Kuwait',
                    'KY': 'America/Cayman',
                    'KZ': 'Asia/Almaty',
                    'LA': 'Asia/Vientiane',
                    'LB': 'Asia/Beirut',
                    'LC': 'America/St_Lucia',
                    'LI': 'Europe/Vaduz',
                    'LK': 'Asia/Colombo',
                    'LR': 'Africa/Monrovia',
                    'LS': 'Africa/Maseru',
                    'LT': 'Europe/Vilnius',
                    'LU': 'Europe/Luxembourg',
                    'LV': 'Europe/Riga',
                    'LY': 'Africa/Tripoli',
                    'MA': 'Africa/Casablanca',
                    'MC': 'Europe/Monaco',
                    'MD': 'Europe/Chisinau',
                    'ME': 'Europe/Podgorica',
                    'MF': 'America/Marigot',
                    'MG': 'Indian/Antananarivo',
                    'MH': 'Pacific/Majuro',
                    'MK': 'Europe/Skopje',
                    'ML': 'Africa/Bamako',
                    'MM': 'Asia/Yangon',
                    'MN': 'Asia/Ulaanbaatar',
                    'MO': 'Asia/Macau',
                    'MP': 'Pacific/Saipan',
                    'MQ': 'America/Martinique',
                    'MR': 'Africa/Nouakchott',
                    'MS': 'America/Montserrat',
                    'MT': 'Europe/Malta',
                    'MU': 'Indian/Mauritius',
                    'MV': 'Indian/Maldives',
                    'MW': 'Africa/Blantyre',
                    'MX': 'America/Mexico_City',
                    'MY': 'Asia/Kuala_Lumpur',
                    'MZ': 'Africa/Maputo',
                    'NA': 'Africa/Windhoek',
                    'NC': 'Pacific/Noumea',
                    'NE': 'Africa/Niamey',
                    'NF': 'Pacific/Norfolk',
                    'NG': 'Africa/Lagos',
                    'NI': 'America/Managua',
                    'NL': 'Europe/Amsterdam',
                    'NO': 'Europe/Oslo',
                    'NP': 'Asia/Kathmandu',
                    'NR': 'Pacific/Nauru',
                    'NU': 'Pacific/Niue',
                    'NZ': 'Pacific/Auckland',
                    'OM': 'Asia/Muscat',
                    'PA': 'America/Panama',
                    'PE': 'America/Lima',
                    'PF': 'Pacific/Tahiti',
                    'PG': 'Pacific/Port_Moresby',
                    'PH': 'Asia/Manila',
                    'PK': 'Asia/Karachi',
                    'PL': 'Europe/Warsaw',
                    'PM': 'America/Miquelon',
                    'PN': 'Pacific/Pitcairn',
                    'PR': 'America/Puerto_Rico',
                    'PS': 'Asia/Gaza',
                    'PT': 'Europe/Lisbon',
                    'PW': 'Pacific/Palau',
                    'PY': 'America/Asuncion',
                    'QA': 'Asia/Qatar',
                    'RE': 'Indian/Reunion',
                    'RO': 'Europe/Bucharest',
                    'RS': 'Europe/Belgrade',
                    'RU': 'Europe/Moscow',
                    'RW': 'Africa/Kigali',
                    'SA': 'Asia/Riyadh',
                    'SB': 'Pacific/Guadalcanal',
                    'SC': 'Indian/Mahe',
                    'SD': 'Africa/Khartoum',
                    'SE': 'Europe/Stockholm',
                    'SG': 'Asia/Singapore',
                    'SH': 'Atlantic/St_Helena',
                    'SI': 'Europe/Ljubljana',
                    'SJ': 'Arctic/Longyearbyen',
                    'SK': 'Europe/Bratislava',
                    'SL': 'Africa/Freetown',
                    'SM': 'Europe/San_Marino',
                    'SN': 'Africa/Dakar',
                    'SO': 'Africa/Mogadishu',
                    'SR': 'America/Paramaribo',
                    'SS': 'Africa/Juba',
                    'ST': 'Africa/Sao_Tome',
                    'SV': 'America/El_Salvador',
                    'SX': 'America/Lower_Princes',
                    'SY': 'Asia/Damascus',
                    'SZ': 'Africa/Mbabane',
                    'TC': 'America/Grand_Turk',
                    'TD': 'Africa/Ndjamena',
                    'TF': 'Indian/Kerguelen',
                    'TG': 'Africa/Lome',
                    'TH': 'Asia/Bangkok',
                    'TJ': 'Asia/Dushanbe',
                    'TK': 'Pacific/Fakaofo',
                    'TL': 'Asia/Dili',
                    'TM': 'Asia/Ashgabat',
                    'TN': 'Africa/Tunis',
                    'TO': 'Pacific/Tongatapu',
                    'TR': 'Europe/Istanbul',
                    'TT': 'America/Port_of_Spain',
                    'TV': 'Pacific/Funafuti',
                    'TW': 'Asia/Taipei',
                    'TZ': 'Africa/Dar_es_Salaam',
                    'UA': 'Europe/Kiev',
                    'UG': 'Africa/Kampala',
                    'UM': 'Pacific/Wake',
                    'US': 'America/New_York',
                    'UY': 'America/Montevideo',
                    'UZ': 'Asia/Samarkand',
                    'VA': 'Europe/Vatican',
                    'VC': 'America/St_Vincent',
                    'VE': 'America/Caracas',
                    'VG': 'America/Tortola',
                    'VI': 'America/St_Thomas',
                    'VN': 'Asia/Ho_Chi_Minh',
                    'VU': 'Pacific/Efate',
                    'WF': 'Pacific/Wallis',
                    'WS': 'Pacific/Apia',
                    'XK': 'Europe/Belgrade',
                    'YE': 'Asia/Aden',
                    'YT': 'Indian/Mayotte',
                    'ZA': 'Africa/Johannesburg',
                    'ZM': 'Africa/Lusaka',
                    'ZW': 'Africa/Harare'
                }
    
                const timezone = stateTimezoneMap[mpz]

                if (!timezone) {
                    this.localTime = 'Není k dispozici časová zóna pro tento stát.'
                    this.localDate = 'Není k dispozici časová zóna pro tento stát.'
                    return
                }
        
                // Local time
                this.local = moment().tz(timezone).format('HH:mm DD.MMMM YYYY')
                this.localTime = moment().tz(timezone).format('HH:mm')
                this.localDate = moment().tz(timezone).format('DD.MMMM YYYY')

                // Czech time
                this.czech = moment().tz('Europe/Prague').format('HH:mm DD.MMMM YYYY')
                this.czechTime = moment().tz('Europe/Prague').format('HH:mm')
                this.czechDate = moment().tz('Europe/Prague').format('DD.MMMM YYYY')
            }
        }
    })
</script>
