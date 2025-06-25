const cardsContainer = document.getElementById("cards");
const form = document.getElementById("addMemberForm");

const defaultImage = "https://via.placeholder.com/150";

const members = [
    {
        name: "Nguyễn Đức Trung",
        title: "Nhà phát triển Web",
        link: "profile1-1.html",
        image: "img/trung.png"
    },
    {
        name: "Nguyễn Văn B",
        title: "Nhà thiết kế đồ họa",
        link: "profile2.html",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Nguyễn Văn C",
        title: "Kỹ sư phần mềm",
        link: "profile3.html",
        image: "https://via.placeholder.com/150"
    }
];

// Hiển thị tất cả thành viên
function showSection(id) {
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const target = document.getElementById(id);
    if (target) {
        if (target.tagName === 'HEADER') {
            target.style.display = 'flex';
        } else {
            target.style.display = 'block';
        }
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const link = document.getElementById("profileLink").value;
    const image = document.getElementById("imageLink").value;

    members.push({ name, title, link, image });
    renderMembers();
    form.reset();
});

// Xử lý khi click vào ô "Thêm hồ sơ"
renderMembers();
document.addEventListener("DOMContentLoaded", function () {
    const addCard = document.getElementById("addProfileCard");
    if (addCard) {
        addCard.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            form.style.display = "block";
        });
    }
});

