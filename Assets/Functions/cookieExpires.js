const cookieExpires = (exdays = 1) => {
    let dateOfNow = new Date();
    dateOfNow.setTime(dateOfNow.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + dateOfNow.toUTCString();
    return expires;
}

export default cookieExpires;