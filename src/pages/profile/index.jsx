import { useState } from "react";
import { ProfileSidebar } from "./profile-sidebar";
import { SupportSection } from "./support-section";
import { PaymentSection } from "./payment-section";
import { SettingsSection } from "./settings-section";
import { PROFILE_NAVIGATION } from "../../constants";
import { SubscriptionSection } from "./subscription-section";
import { contentNavigationData } from "../../data";
import { ProfileInfo, ProfileSection } from "./profile-section";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const Profile = () => {
  const [profileNavigation, setProfileNavigation] = useState(null);

  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
      <div className="mt-8 flex items-center gap-4 sm:gap-3 md:mt-0">
        <div className="text-[#60646C] text-sm">Видео</div>

        <img
          src={ChevronRightIcon}
          alt="chevron-right"
          className="size-4 sm:size-3"
        />

        <div className="font-medium text-[#202020] text-sm">Личный кабинет</div>
      </div>

      <div className="mt-10 mb-16 flex gap-10 md:flex-col md:items-center md:mt-8 md:mb-8">
        {!profileNavigation && <ProfileInfo className="hidden md:flex" />}

        <ProfileSidebar
          className="md:order-2"
          profileNavigation={profileNavigation}
          setProfileNavigation={setProfileNavigation}
        />

        {(profileNavigation === PROFILE_NAVIGATION.PROFILE ||
          !profileNavigation) && (
          <ProfileSection profileNavigation={profileNavigation} />
        )}
        {profileNavigation === PROFILE_NAVIGATION.PLANS && (
          <SubscriptionSection />
        )}
        {profileNavigation === PROFILE_NAVIGATION.PAYMENT && <PaymentSection />}
        {profileNavigation === PROFILE_NAVIGATION.SETTINGS && (
          <SettingsSection />
        )}
        {profileNavigation === PROFILE_NAVIGATION.SUPPORT && <SupportSection />}
      </div>
    </div>
  );
};
