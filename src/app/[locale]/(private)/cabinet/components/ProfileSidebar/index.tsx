'use client';
import { FC, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { locales } from 'constants/locales';

import { EnumRoles } from 'types/enums';
import { IUser } from 'types/userTypes';
import { useAuth } from 'utils/hooks/useAuth';

import { ExitIcon } from 'components/icons/ExitIcon';
import { PlusIcon } from 'components/icons/PlusIcon';

import s from './ProfileSidebar.module.scss';
import { ISidebarConfig } from '../../layout';

interface IItem {
  icon: ReactNode;
  title: string;
  href: string;
}

interface ProfileSidebarProps {
  config: ISidebarConfig;
  user?: IUser;
}

export const ProfileSidebar: FC<ProfileSidebarProps> = ({ config, user }) => {
  const t = useTranslations('ProfilePage.Sidebar');
  const pathname = usePathname();
  const { logout } = useAuth();
  const isSeller = user?.role === EnumRoles.SELLER;

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebar_top}>
        <div className={s.user}>
          <div className={s.user_image}>
            {user?.avatarURL ? (
              <Image
                src={user?.avatarURL}
                width={76}
                height={76}
                alt={user?.userName}
                loader={({ src, width: w, quality }) => {
                  const q = quality || 75;
                  return `${src}?w=${w}&q=${q}`;
                }}
              />
            ) : (
              <span>
                {user?.userName?.substring(0, 1) || user?.email.substring(0, 1)}
              </span>
            )}
            <div className={s.user_level}>
              <span className="text_accent">
                {t('level')}.{user?.level}
              </span>
            </div>
          </div>
          <div className={s.user_info}>
            <span className={s.user_name}>
              {user?.userName ? user?.userName : 'Jane Cooper'}
            </span>
            {isSeller ? (
              <div className={s.user_confident}>
                <span className={s.user_confident_value}>
                  {t('confident_lvl')} {user.confidentLvl}%
                </span>
                <span
                  className={s.user_confident_line}
                  style={{
                    width: `${user.confidentLvl}%`,
                  }}
                />
              </div>
            ) : (
              <span className={s.user_email}>
                {user?.email ? user?.email : 'jane@gmail.com'}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={s.sidebar_content}>
        <div className={s.sidebar_body}>
          <ul className={s.sidebar_list}>
            {config.items.map((item, index) => {
              const regex = new RegExp(`^/(?:${locales.join('|')})/`);
              const cleanedUrl = pathname.replace(regex, '/');
              const isActive = cleanedUrl.startsWith(item.href);

              return (
                <li className={s.sidebar_item} key={index}>
                  <Link
                    className={`${s.sidebar_button} ${
                      isActive ? s.active : ''
                    }`.trim()}
                    href={item.href}
                  >
                    {item.icon}
                    <span>{t(item.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {config.footerContent && (
        <div className={s.sidebar_footer}>{config.footerContent}</div>
      )}
    </aside>
  );
};
