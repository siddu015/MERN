import React from "react";
import styled from "styled-components";

const SocialLinks = () => {
    return (
        <StyledWrapper>
            <div className="social-login-icons">
                <div className="socialcontainer">
                    <div className="icon social-icon-1-1">
                        <svg
                            viewBox="0 0 512 512"
                            height="1.7em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svgIcontwit"
                            fill="white"
                        >
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                        </svg>
                    </div>
                    <div className="social-icon-1">
                        <svg
                            viewBox="0 0 512 512"
                            height="1.7em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svgIcontwit"
                            fill="white"
                        >
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                        </svg>
                    </div>
                </div>
                <div className="socialcontainer">
                    <div className="icon social-icon-2-2">
                        <svg
                            fill="white"
                            className="svgIcon"
                            viewBox="0 0 448 512"
                            height="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </div>
                    <div className="social-icon-2">
                        <svg
                            fill="white"
                            className="svgIcon"
                            viewBox="0 0 448 512"
                            height="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </div>
                </div>
                <div className="socialcontainer">
                    <div className="icon social-icon-3-3">
                        <svg
                            viewBox="0 0 384 512"
                            fill="white"
                            height="1.6em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                        </svg>
                    </div>
                    <div className="social-icon-3">
                        <svg
                            viewBox="0 0 384 512"
                            fill="white"
                            height="1.6em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                        </svg>
                    </div>
                </div>
                <div className="socialcontainer">
                    <div className="icon social-icon-4-4">
                        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Linkedin</title>
                            <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <path
                                    d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                                    id="Shape" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="social-icon-4">
                        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Linkedin</title>
                            <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <path
                                    d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                                    id="Shape" fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="socialcontainer">
                    <div className="icon social-icon-5-5">
                        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Youtube</title>
                            <g id="Icon/Social/youtube-black" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <path
                                    d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z"
                                    id="Shape" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="social-icon-5">
                        <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Youtube</title>
                            <g id="Icon/Social/youtube-white" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <path
                                    d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z"
                                    id="Shape" fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <img src="./assets/PiggyBank.png" alt="Piggy Bank" className="card__image"/>

            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .social-login-icons {
        display: flex;
        align-items: center;
        gap: 10px;
        -webkit-box-reflect: below 5px linear-gradient(transparent, #00000055);
    }

    .social-login-icons svg {
        width: 40px;
    }

    .social-icon-1,
    .social-icon-1-1,
    .social-icon-2,
    .social-icon-2-2,
    .social-icon-3,
    .social-icon-3-3,
    .social-icon-4,
    .social-icon-4-4,
    .social-icon-5,
    .social-icon-5-5 {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin: 20px 0 0px 0;
    }

    .icon svg {
        fill: #111;
    }

    .socialcontainer {
        height: 80px;
        overflow: hidden;
    }

    .social-icon-1 {
        transition-duration: 0.4s;
        background-color: rgb(0, 0, 0);
        transition-timing-function: cubic-bezier(0.46, -0.78, 0.5, 1.56);
    }

    .social-icon-1 svg,
    .social-icon-2 svg,
    .social-icon-3 svg,
    .social-icon-4 svg,
    .social-icon-5 svg {
        opacity: 0;
        transition-duration: 0.5s;
        transition-delay: 0.2s;
    }

    .social-icon-1-1 {
        transition-duration: 0.4s;
        background-color: rgb(0, 0, 0, 0);
    }

    .socialcontainer:hover .social-icon-1 {
        transform: translateY(-70px);
    }

    .socialcontainer:hover .social-icon-1 svg,
    .socialcontainer:hover .social-icon-2 svg,
    .socialcontainer:hover .social-icon-3 svg,
    .socialcontainer:hover .social-icon-4 svg,
    .socialcontainer:hover .social-icon-5 svg {
        opacity: 1;
    }

    .social-icon-2 {
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.46, -0.78, 0.5, 1.56);
        background: linear-gradient(
                72.44deg,
                #ff7a00 11.92%,
                #ff0169 51.56%,
                #d300c5 85.69%
        );
    }

    .socialcontainer:hover .social-icon-2 {
        transform: translateY(-70px);
    }

    .social-icon-3 {
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.46, -0.78, 0.5, 1.56);
        background: #316ff6;
    }

    .socialcontainer:hover .social-icon-3 {
        transform: translateY(-70px);
    }

    .social-icon-4 {
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.46, -0.78, 0.5, 1.56);

        background: linear-gradient(
                180deg,
                rgba(129, 34, 144, 1) 0%,
                rgba(77, 34, 124, 1) 91%
        );
    }

    .socialcontainer:hover .social-icon-4 {
        transform: translateY(-70px);
    }

    .social-icon-5 {
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.46, -0.78, 0.5, 1.56);

        background: linear-gradient(
                180deg,
                rgb(255, 0, 0) 0%,
                rgb(215, 14, 14) 91%
        );
    }

    .socialcontainer:hover .social-icon-5 {
        transform: translateY(-70px);
    }

`;

export default SocialLinks;