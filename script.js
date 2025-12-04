<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chi tiết xe PKL</title>
<style>
    /* ================= BODY ================= */
    body {
        font-family: 'Orbitron', Arial, sans-serif;
        padding: 20px;
        background: #0a0a0a;
        color: #00ffff;
    }

    /* ================= CONTAINER ================= */
    #detail {
        max-width: 700px;
        margin: 40px auto;
        background: rgba(0, 0, 0, 0.7);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 0 40px #00ffff;
        text-align: center;
        border: 1px solid #00ffff33;
        transition: transform 0.3s, box-shadow 0.3s;
    }
    #detail:hover { 
        transform: scale(1.02);
        box-shadow: 0 0 60px #00ffff;
    }

    /* ================= IMAGE ================= */
    #detail img {
        width: 80%;
        max-height: 400px;
        border-radius: 15px;
        margin: 20px 0;
        object-fit: contain;
        box-shadow: 0 0 25px #00ffff, 0 0 50px #00ffff33 inset;
        transition: transform 0.4s, filter 0.4s, box-shadow 0.4s;
    }
    #detail img:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
        box-shadow: 0 0 50px #00ffff, 0 0 80px #00ffff55 inset;
    }

    /* ================= TEXT ================= */
    #detail h2 {
        font-size: 32px;
        margin-bottom: 15px;
        color: #00ffff;
        text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff77;
    }
    #detail p {
        font-size: 18px;
        margin: 8px 0;
        color: #00ffff;
        text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff55;
    }
    #detail p b {
        color: #ff1e28;
        text-shadow: 0 0 5px #ff1e28, 0 0 10px #ff1e28aa;
    }

    /* ================= BUTTON ================= */
    .button {
        display: inline-block;
        padding: 12px 25px;
        background: linear-gradient(90deg,#00ffff,#00aaff);
        color: #000;
        text-decoration: none;
        border-radius: 12px;
        margin-top: 20px;
        font-weight: 700;
        box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff66;
        transition: transform 0.3s, filter 0.3s, box-shadow 0.3s;
    }
    .button:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
        box-shadow: 0 0 30px #00ffff, 0 0 50px #00ffff88;
    }

    /* ================= RESPONSIVE ================= */
    @media(max-width: 768px){
        #detail img { width: 100%; height:auto; }
        #detail { padding:20px; }
    }
</style>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

<div id="detail"></div>

<script>
    // ================= DỮ LIỆU XE =================
   const bikes = {
    r1: {
        name: "Yamaha R1",
        brand: "Yamaha",
        price: "600.000.000 VNĐ",
        cc: "998cc",
        hp: "200 HP",
        img: "img/Yamaha R1.jpg",
        link: "https://www.yamaha-motor.com"
    },
    cbr: {
        name: "Honda CBR1000RR",
        brand: "Honda",
        price: "700.000.000 VNĐ",
        cc: "1000cc",
        hp: "215 HP",
        img: "img/Honda CBR1000RR.jpg",
        link: "https://www.honda.com"
    },
    zx10r: {
        name: "Kawasaki ZX-10R",
        brand: "Kawasaki",
        price: "580.000.000 VNĐ",
        cc: "998cc",
        hp: "203 HP",
        img: "img/Kawasaki ZX-10R.jpg",
        link: "https://www.kawasaki.com"
    },
    DucatiV42025: {
        name: "Ducati Panigale V4 R 2025",
        brand: "Ducati",
        cc: "999cc",
        hp: "212 HP",
        price: "1.300.000.000 VNĐ",
        img: "img/Ducati Panigale V4 R 2025.jpg",
        link: "https://www.ducati.com"
    },
    "Kawasaki Ninja H2 2025": {
        name: "Kawasaki Ninja H2 2025",
        brand: "Kawasaki",
        cc: "998cc",
        hp: "310 HP",
        price: "1.800.000.000 VNĐ",
        img: "img/Kawasaki Ninja H2 2025.jpg",
        link: "https://www.kawasaki.com"
    },
    "Yamaha R1M 2025": {
        name: "Yamaha R1M 2025",
        brand: "Yamaha",
        cc: "998cc",
        hp: "200 HP",
        price: "950.000.000 VNĐ",
        img: "img/Yamaha R1M 2025.jpg",
        link: "https://www.yamaha-motor.com"
    },
    "Benelli 302S": {
        name: "Benelli 302S",
        brand: "Benelli",
        cc: "300cc",
        hp: "100 HP",
        price: "127.966.000 VNĐ", // Đã sửa lại giá chính xác
        img: "img/Benelli 302S.jpg",
        link: "https://www.benelli.com"
    },
    "Kawasaki Z1000": {
        name: "Kawasaki Z1000",
        brand: "Kawasaki",
        cc: "1.043cc",
        hp: "142 HP",
        price: "412.000.000 VNĐ",
        img: "img/Kawasaki Z1000.jpg",
        link: "https://www.kawasaki.com"
    },
    "BMW S1000RR": {
        name: "BMW S1000RR",
        brand: "BMW",
        cc: "999cc",
        hp: "193 HP",
        price: "457.080.000 VNĐ",
        img: "img/BMW S1000RR.jpg",
        link: "https://www.bmw-motorcycles.com"
    },
    "Harley Davidson Street 750": {
        name: "Harley Davidson Street 750",
        brand: "Harley Davidson",
        cc: "749cc",
        hp: "100 HP",
        price: "354.000.000 VNĐ",
        img: "img/Harley Davidson Street 750.jpg",
        link: "https://www.harley-davidson.com"
    },
    "Harley-Davidson CVO": {
        name: "Harley-Davidson CVO Road Glide 2025",
        brand: "Harley Davidson",
        cc: "999cc",
        hp: "115 HP",
        price: "1.210.000.000 VNĐ",
        img: "img/Harley-Davidson CVO Road Glide 2025 .jpg",
        link: "https://www.harley-davidson.com"
    },
    "Harley-Davidson Road": {
        name: "Harley-Davidson Road Glide 2025",
        brand: "Harley Davidson",
        cc: "999cc",
        hp: "117 HP",
        price: "738.000.000 VNĐ",
        img: "img/Harley-Davidson Road Glide 2025.jpg",
        link: "https://www.harley-davidson.com"
    },
    
    // 8 XE MỚI ĐƯỢC THÊM VÀO DƯỚI ĐÂY
    ApriliaRSV4: {name:"Aprilia RSV4 1100 Factory",brand:"Aprilia",price:"850.000.000 VNĐ",cc:"1077cc",hp:"217 HP",img:"img/Aprilia_RSV4.jpg", link: "https://www.aprilia.com"},
    SuzukiHayabusa: {name:"Suzuki Hayabusa",brand:"Suzuki",price:"620.000.000 VNĐ",cc:"1340cc",hp:"190 HP",img:"img/Suzuki_Hayabusa.jpg", link: "https://www.suzuki.com"},
    TriumphSpeed: {name:"Triumph Speed Triple 1200 RS",brand:"Triumph",price:"550.000.000 VNĐ",cc:"1160cc",hp:"180 HP",img:"img/Triumph_Speed_Triple.jpg", link: "https://www.triumphmotorcycles.com"},
    KTM1290: {name:"KTM 1290 Super Duke R",brand:"KTM",price:"500.000.000 VNĐ",cc:"1301cc",hp:"180 HP",img:"img/KTM_Super_Duke.jpg", link: "https://www.ktm.com"},
    HondaCB650R: {name:"Honda CB650R",brand:"Honda",price:"250.000.000 VNĐ",cc:"649cc",hp:"94 HP",img:"img/Honda_CB650R.jpg", link: "https://www.honda.com"},
    KawasakiZ900: {name:"Kawasaki Z900",brand:"Kawasaki",price:"330.000.000 VNĐ",cc:"948cc",hp:"125 HP",img:"img/Kawasaki Z900.jpg", link: "https://www.kawasaki.com"},
    DucatiStreet: {name:"Ducati Streetfighter V4 SP",brand:"Ducati",price:"1.500.000.000 VNĐ",cc:"1103cc",hp:"208 HP",img:"img/Ducati_Streetfighter.jpg", link: "https://www.ducati.com"},
    MVAgustaRush: {name:"MV Agusta Rush 1000",brand:"MV Agusta",price:"2.200.000.000 VNĐ",cc:"998cc",hp:"208 HP",img:"img/MV_Agusta_Rush.jpg", link: "https://www.mvagusta.com"}
    
};

    // ================= LẤY ID XE TỪ URL =================
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const detailEl = document.getElementById("detail");

    // ================= HIỂN THỊ THÔNG TIN XE =================
    if(id && bikes[id]){
        const b = bikes[id];
        detailEl.innerHTML = `
            <h2>${b.name}</h2>
            <img src="${b.img}" alt="${b.name}">
            <p><b>Hãng:</b> ${b.brand}</p>
            <p><b>Dung tích:</b> ${b.cc}</p>
            <p><b>Mã lực:</b> ${b.hp}</p>
            <p><b>Giá:</b> ${b.price}</p>
            <a class="button" href="${b.link}" target="_blank">Trang hãng xe</a>
        `;
        // *Lưu ý: Tôi đã sửa lại các key cc và hp để hiển thị đúng thông tin từ đối tượng bikes, do trong code gốc bạn đang dùng engine và weight (không có trong dữ liệu).*
    } else {
        detailEl.innerHTML = "<p style='font-size:20px;color:#ff4c4c;text-shadow:0 0 8px #ff1e28;'>Xe không tồn tại!</p>";
    }
</script>

</body>
</html>