import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/configs/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
  CoinIcon,
  HelpIcon,
  InboxIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  ProfileIcon,
  SettingsIcon,
  ShortcutsIcon,
  UploadIcon,
} from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Vietnamese(Tiếng Việt)',
        },
        {
          code: 'chi',
          title: 'Chinese(中国人)',
        },
        {
          code: 'kor',
          title: 'Korean(한국인)',
        },
        {
          code: 'ja',
          title: 'Japanese(日本語)',
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <ShortcutsIcon />,
    title: 'Keyboard shortcuts',
  },
];

const userMenu = [
  {
    icon: <ProfileIcon />,
    title: 'View profile',
    to: '/@hoaa',
  },
  {
    icon: <CoinIcon />,
    title: 'Get coins',
    to: '/coins',
  },
  {
    icon: <SettingsIcon />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  //Handle Logic
  const handleOnChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routesConfig.home} className={cx('logo-link')}>
            <img src={images.logo} alt="tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('actions-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>10</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
            {currentUser ? (
              <Image
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d1568b2072bb1caae9a61bd9f4a0adc4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2de42b40&x-expires=1742745600&x-signature=OY4JW%2BGgoUOQlLdDrrvar0ZPkw8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                className={cx('user-avatar')}
                alt="Nguyen Van B"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
