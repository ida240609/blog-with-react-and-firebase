import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const APP_NAME = "/blog-with-react-and-firebase"; // リポジトリ名

const Navbar = ({isAuth}) => {
  return (
    <nav>
        <Link to={APP_NAME + "/"}><FontAwesomeIcon icon={faHouse} />ホーム</Link>
        
        {!isAuth ? (
          <Link to={APP_NAME + "/login"}><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>
        ) : (
          <>
          <Link to={APP_NAME + "/createpost"}><FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
          <Link to={APP_NAME + "/logout"}><FontAwesomeIcon icon={faArrowRightToBracket} />ログアウト</Link>
          </>
        )}
        
    </nav>
  )
}

export default Navbar