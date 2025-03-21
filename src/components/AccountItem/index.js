import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d1568b2072bb1caae9a61bd9f4a0adc4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2de42b40&x-expires=1742745600&x-signature=OY4JW%2BGgoUOQlLdDrrvar0ZPkw8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
        alt="Hoaaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van B</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>Nguyen Van B</span>
      </div>
    </div>
  );
}

export default AccountItem;
