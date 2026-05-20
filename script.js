const reels = [
    {
        ismuted: true,
        username: "mihir_dev",
        isLiked: false,
        likecount: 100,
        commentscount: 20,
        sharecount: 6,
        isfollowed: true,
        caption: "Late night coding 🌙💻",
        video: "./reels/v1.mp4.mp4",
        userprofile: "./reels/p1.jpg"
    },
    {
        ismuted: true,
        username: "code_with_raj",
        isLiked: false,
        likecount: 800,
        commentscount: 50,
        sharecount: 30,
        isfollowed: false,
        caption: "React hooks in 30 seconds ⚛️",
        video: "./reels/v2.mp4.mp4",

        userprofile: "./reels/p2.jpg"
    },
    {
        ismuted: true,
        username: "fitness_aryan",
        isLiked: false,
        likecount: 500,
        commentscount: 50,
        sharecount: 20,
        isfollowed: true,
        caption: "Consistency > Motivation 💪",
        video: "./reels/v3.mp4.mp4",

        userprofile: "./reels/p3.jpg"
    },
    {
        ismuted: true,
        username: "travel_vibes",
        isLiked: true,
        likecount: 1000,
        commentscount: 10,
        sharecount: 15,
        isfollowed: false,
        caption: "Mountains calling 🏔️",
        video: "./reels/v4.mp4.mp4",
        userprofile: "./reels/p4.jpg"
    },
    {
        ismuted: true,
        username: "foodie_world",
        isLiked: false,
        likecount: 700,
        commentscount: 40,
        sharecount: 55,
        isfollowed: false,
        caption: "Street food vibes 😋",
        video: "./reels/v5.mp4.mp4",
        userprofile: "./reels/p5.jpg"
    },
    {
        ismuted: true,
        username: "uiux_daily",
        isLiked: true,
        likecount: 666,
        commentscount: 88,
        sharecount: 55,
        isfollowed: true,
        caption: "Clean UI matters 🎨",
        video: "./reels/v1.mp4.mp4",
        userprofile: "./reels/p1.jpg"
    },
    {
        ismuted: true,
        username: "crypto_news",
        isLiked: false,
        likecount: 600,
        commentscount: 44,
        sharecount: 95,
        isfollowed: false,
        caption: "Market update 🚀",
        video: "./reels/v2.mp4.mp4",
        userprofile: "./reels/p2.jpg"
    },
    {
        ismuted: true,
        username: "nature_clicks",
        isLiked: false,
        likecount: 699,
        commentscount: 45,
        sharecount: 33,
        isfollowed: false,
        caption: "Sunset therapy 🌅",
        video: "./reels/v3.mp4.mp4",
        userprofile: "./reels/p3.jpg"
    },
    {
        ismuted: true,
        username: "startup_diaries",
        isLiked: true,
        likecount: 654,
        commentscount: 23,
        sharecount: 17,
        isfollowed: true,
        caption: "Building from scratch 💼",
        video: "./reels/v4.mp4.mp4",
        userprofile: "./reels/p4.jpg"
    },
    {
        ismuted: true,
        username: "music_beats",
        isLiked: true,
        likecount: 337,
        commentscount: 44,
        sharecount: 22,
        isfollowed: false,
        caption: "Feel the rhythm 🎧",
        video: "./reels/v5.mp4.mp4",
        userprofile: "./reels/p5.jpg"
    }
];

var allreels = document.querySelector('.all-reels')



function addData() {
    var sum = ''
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                <div class="mute" id=${idx} >
                    ${elem.ismuted?'<i class="ri-volume-mute-line">':'<i class="ri-volume-up-line"></i>'} </i> 
                </div>
                
                    <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <hismutedtrue,4>  ${elem.username}</hismutedtrue,4>
                            <button id=${idx} class='follow'>${elem.isfollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                            <h5>${elem.caption}</h5>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</i></h4>
                            <h6>${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentscount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`

    })
    allreels.innerHTML = sum;
}

addData();

allreels.addEventListener('click', function (det) {

    if (det.target.className == 'like') {
        if (!reels[det.target.id].isLiked) {
            reels[det.target.id].likecount++
            reels[det.target.id].isLiked = true
        } else {
            reels[det.target.id].likecount--
            reels[det.target.id].isLiked = false
        }
        addData()
    }
    
    if (det.target.className == 'follow') {
        if (!reels[det.target.id].isfollowed) {
            reels[det.target.id].isfollowed = true
        } else {
            reels[det.target.id].isfollowed = false
        }
        addData()
    }
    if (det.target.className == 'mute') {
        if (!reels[det.target.id].ismuted) {
            reels[det.target.id].ismuted = true
        } else {
            reels[det.target.id].ismuted = false
        }
        addData()
    }
    



})

