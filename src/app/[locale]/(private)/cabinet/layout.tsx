import { ReactNode } from 'react';
import { EnumRoles } from 'types/enums';

import { Container } from 'ui/components/Container';
import { Header } from 'components/header';
import { ProfileSidebar } from './components/ProfileSidebar';

import { buyerConfig } from './sidebar-configs/buyer-config';

import s from './Cabinet.module.scss';

export interface ISidebarConfig {
  items: {
    icon: ReactNode;
    title: string;
    href: string;
  }[];
  footerContent?: ReactNode;
}

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const currentConfig: ISidebarConfig = buyerConfig;

  return (
    <>
      <Header />
      <main className={s.profile}>
        <Container>
          <div className={s.profile_wrapper}>
            <ProfileSidebar config={currentConfig} />
            {children}
          </div>
        </Container>
      </main>
    </>
  );
}
