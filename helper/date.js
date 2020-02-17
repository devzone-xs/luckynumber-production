export {
    Day,
    Mon,
    Year,
    hourOptions
}

const Day = [
    { key: 1, value: new Date().getDate() - 1, text: new Date().getDate() - 1 },
    { key: 1, value: new Date().getDate(), text: new Date().getDate() },
    { key: 2, value: new Date().getDate() + 1, text: new Date().getDate() + 1 },
]

const Mon = [
    { key: 'มกราคม', value: 1, text: 'มกราคม' },
    { key: 'กุมภาพันธ์', value: 2, text: 'กุมภาพันธ์' },
    { key: 'มีนาคม', value: 3, text: 'มีนาคม' },
    { key: 'เมษายน', value: 4, text: 'เมษายน' },
    { key: 'พฤษภาคม', value: 5, text: 'พฤษภาคม' },
    { key: 'มิถุนายน', value: 6, text: 'มิถุนายน' },
    { key: 'กรกฎาคม', value: 7, text: 'กรกฎาคม' },
    { key: 'สิงหาคม', value: 8, text: 'สิงหาคม' },
    { key: 'กันยายน', value: 9, text: 'กันยายน' },
    { key: 'ตุลาคม', value: 10, text: 'ตุลาคม' },
    { key: 'พฤศจิกายน', value: 11, text: 'พฤศจิกายน' },
    { key: 'ธันวาคม', value: 12, text: 'ธันวาคม' }
]

const Year = [
    { key: 1, value: new Date().getFullYear(), text: new Date().getFullYear() },
    { key: 2, value: new Date().getFullYear() + 1, text: new Date().getFullYear() + 1 },
    { key: 3, value: new Date().getFullYear() + 2, text: new Date().getFullYear() + 2 },
    { key: 4, value: new Date().getFullYear() + 3, text: new Date().getFullYear() + 3 },
    { key: 5, value: new Date().getFullYear() + 4, text: new Date().getFullYear() + 4 },
]

const hourOptions = [
    { key: 1, value: '00', text: '00' },
    { key: 2, value: '01', text: '01' },
    { key: 3, value: '02', text: '02' },
    { key: 4, value: '03', text: '03' },
    { key: 5, value: '04', text: '04' },
    { key: 6, value: '05', text: '05' },
    { key: 7, value: '06', text: '06' },
    { key: 8, value: '07', text: '07' },
    { key: 9, value: '08', text: '08' },
    { key: 10, value: '09', text: '09' },
    { key: 10, value: '10', text: '10' },
    { key: 11, value: '11', text: '11' },
    { key: 12, value: '12', text: '12' },
    { key: 13, value: '13', text: '13' },
    { key: 14, value: '14', text: '14' },
    { key: 15, value: '15', text: '15' },
    { key: 16, value: '16', text: '16' },
    { key: 17, value: '17', text: '17' },
    { key: 18, value: '18', text: '18' },
    { key: 19, value: '19', text: '19' },
    { key: 20, value: '20', text: '20' },
    { key: 21, value: '21', text: '21' },
    { key: 22, value: '22', text: '22' },
    { key: 23, value: '23', text: '23' },
]