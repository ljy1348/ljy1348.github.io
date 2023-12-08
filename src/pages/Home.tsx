import React,{useEffect} from 'react'
import initMain from '../assets/js/main'

function Home() {

    useEffect(()=>{
        initMain();
        
    },[])

  return (
    <div>

{/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>웹 개발자를 꿈꾸다.</h1>
          <br/>
          <h1>개인 프로젝트</h1>
          <h2>게시판형 개인 프로젝트 입니다.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#portfolio" className="btn-get-started scrollto">gif</a>
            <a href="https://play-tv.kakao.com/embed/player/cliplink/442425696?service=player_share" className="glightbox btn-get-started"><i className="bi bi-play-circle"></i><span>동영상</span></a>
            <a href="https://github.com/ljy1348/MiniWebProject.git" className="btn-get-started">깃허브</a>
          </div>
          <br/>
          <br/>
          <h1>팀 프로젝트</h1>
          <h2>팀 프로젝트 등록 예정입니다.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#portfolio" className="btn-get-started scrollto">gif</a>
            <a href="" className="glightbox btn-get-started"><i className="bi bi-play-circle"></i><span>동영상</span></a>
            <a href="https://github.com/ljy1348/project" className="btn-get-started">깃허브</a>
          </div>
        </div>
        
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= Cliens Section ======= --> */}
    <section id="cliens" className="cliens section-bg">
      <div className="container">
      <div className="section-title">
          <h2>기술 스택</h2>
        </div>
        {/* 기술 스택 이미지 1 */}
        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/web.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/react_logo.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/spring_logo.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/java_logo.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/my_sql_logo.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/stack/oracle_db_logo.png" className="img-fluid" alt=""/>
          </div>

        </div>
        {/* 기술 스택 이미지 2 */}
        <div className="row" data-aos="zoom-in">
<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/git_logo.png" className="img-fluid" alt=""/>
</div>

<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/docker_logo.png" className="img-fluid" alt=""/>
</div>

<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/aws_logo.png" className="img-fluid" alt=""/>
</div>

<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/jpa-removebg.png" className="img-fluid" alt=""/>
</div>

<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/mybatis-removebg-preview.png" className="img-fluid" alt=""/>
</div>

<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
  <img src="assets/img/stack/typescript_logo.png" className="img-fluid" alt=""/>
</div>

        </div>

      </div>
    </section>
    {/* <!-- End Cliens Section --> */}

    {/* <!-- ======= About Us Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              웹 개발자를 꿈꾸는 이주영 입니다. 
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> 2010년 김해영운고등학교 졸업</li>
              <li><i className="ri-check-double-line"></i> 2017년 경상국립대학교 물리교육과 졸업</li>
              <li><i className="ri-check-double-line"></i> 2023년 그린 컴퓨터 아카데미 자바/스프링부트 풀스택 과정 수료</li>
            </ul>
        <a href="#" className="btn-learn-more">'이주영'에 대하여</a>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
          <ul>
              <li><i className="ri-check-double-line"></i> 프론트 기술스택 - html, css, js, jquery, typescript, react, bootstrap, axios</li>
              <li><i className="ri-check-double-line"></i> 백엔드 기술스택 - springboot, jpa, mybatis, oracle db, my sql, jsp </li>
              <li><i className="ri-check-double-line"></i> 기타 기술 - docker, aws, redis, tomcat</li>
              <li><i className="ri-check-double-line"></i> 진행한 프로젝트 - 게시판 개인 프로젝트, 팀 프로젝트</li>
            </ul>
        <a href="#" className="btn-learn-more">개인 프로젝트</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" className="btn-learn-more">팀 프로젝트</a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End About Us Section --> */}



    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4>풀스택 웹개발</h4>
              <p>리액트, 스프링부트를 활용한 풀스택 웹개발</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4>aws ci/cd 자동 배포</h4>
              <p>깃허브 액션을 이용해 aws ec2 서버에 자동 배포</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4>도커 라이징</h4>
              <p>프론트 / 백엔드를 도커 이미지로 만들어 컨테이너화 하여 도커 네트워크로 통신</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4>db 관리</h4>
              <p>Oracle DB, MySql, Redis 등의 데이터 베이스 사용 경험</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    {/* <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section> */}
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p></p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-public">개인 프로젝트</li>
          <li data-filter=".filter-team">팀 프로젝트</li>
        </ul>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>조회</h4>
              <p>게시글 목록 조회 및 게시글 상세 조회</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/E1U3P/btsz7Q3YolP/PdIaUMpbX2tM2ReplyyEZK/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/E1U3P/btsz7Q3YolP/PdIaUMpbX2tM2ReplyyEZK/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>댓글</h4>
              <p>댓글 및 대댓글</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/Roph7/btsz9z8sguP/MfnfKjTkLFpArAo3h2Lz6k/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/Roph7/btsz9z8sguP/MfnfKjTkLFpArAo3h2Lz6k/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>수정삭제</h4>
              <p>게시글 수정 및 삭제</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/cN1QUD/btsAcQhejN1/1UDD0E2mEb8pUAdMaPyZVK/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/cN1QUD/btsAcQhejN1/1UDD0E2mEb8pUAdMaPyZVK/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>댓글 알림</h4>
              <p>sse 알림</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/banpN1/btsAeCptFL4/XtmiwmHgPYWIjN7nXWctS1/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/banpN1/btsAeCptFL4/XtmiwmHgPYWIjN7nXWctS1/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>채팅</h4>
              <p>웹소켓 채팅</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>      

                    <div className="col-lg-4 col-md-6 portfolio-item filter-public protfolio-info">
          <a href="https://blog.kakaocdn.net/dn/dJkL9l/btsAiENUgqJ/eA8qu8dHB3dsQLZgoYKxs1/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><img src="https://blog.kakaocdn.net/dn/dJkL9l/btsAiENUgqJ/eA8qu8dHB3dsQLZgoYKxs1/img.gif" className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>관리자</h4>
              <p>삭제된 페이지 복구</p>
              {/* <a href="https://blog.kakaocdn.net/dn/biyHf4/btsAajkbS1Q/SprMWfSPhzWuyJWDQuFbok/img.gif" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a> */}
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>  

          <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/관리자 페이지.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/관리자 페이지.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>관리자 페이지</h4>
              <p>사이트 데이터를 관리하는 관리자 페이지</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>     

          <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/로그인.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/로그인.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>로그인</h4>
              <p>Oauth2.0을 사용해 간편 로그인</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>       

          <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/마이 페이지.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/마이 페이지.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>마이 페이지</h4>
              <p>회원 정보 조회</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>          

           <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/비회원 조회.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/비회원 조회.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>비회원 조회</h4>
              <p>로그인 하지 않고 예약 정보 조회</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>          

          <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/예약 결제.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/예약 결제.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>예약 결제</h4>
              <p>예약시 결제 페이지</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>   

          <div className="col-lg-4 col-md-6 portfolio-item filter-team protfolio-info">
          <a href="/assets/video/회원가입.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1">
            <div className="portfolio-img"><video src="/assets/video/회원가입.mp4" className="img-fluid" /></div>
            <div className="portfolio-info">
              <h4>회원 가입</h4>
              <p>formik을 사용하여 유효성 검사</p>
             <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </a>
          </div>             

        </div>

      </div>
    </section>
    {/* !-- End Portfolio Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p></p>
        </div>

        <div className="row">

          <div className="col-lg-6 mx-auto">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>이주영</h4>
                <span>담당</span>
                <p>로그인/회원가입, 마이페이지, 결제, 관리자 페이지 등</p>
                <div className="social">
                  <a href=""><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    {/* <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section> */}
    {/* <!-- End Frequently Asked Questions Section --> */}

  </main>
  {/* <!-- End #main --> */}

    </div>
  )
}

export default Home