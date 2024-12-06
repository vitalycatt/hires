import { ProfileSidebar } from "./profile-sidebar";
import { SupportSection } from "./support-section";
// import { PaymentSection } from "./payment-section";
// import { ProfileSection } from "./profile-section";
// import { SettingsSection } from "./settings-section";
// import { SubscriptionSection } from "./subscription-section";
import { contentNavigationData } from "../../data";

import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export const Profile = () => {
  return (
    <div className="container flex-1 mx-auto px-10 flex flex-col sm:px-5">
      <ul className="relative left-1/2 -translate-x-1/2 w-screen h-10 flex justify-center items-center gap-[58px] bg-[#F0F0F3]">
        {contentNavigationData.map((item, index) => (
          <li
            className="flex gap-[10.5px] font-medium text-[#1C2024] first:text-[#008647]/80 cursor-pointer"
            key={index}
          >
            <img src={item.url} alt="content-icon" />

            <div>{item.label}</div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-4">
        <div className="text-[#60646C] text-sm">Видео</div>

        <img src={ChevronRightIcon} alt="chevron-right" className="size-4" />

        <div className="font-medium text-[#202020] text-sm">Личный кабинет</div>
      </div>

      <div className="mt-10 mb-16 flex gap-10">
        <ProfileSidebar />

        {/* <ProfileSection /> */}
        {/* <SettingsSection /> */}
        {/* <SubscriptionSection /> */}
        {/* <PaymentSection /> */}
        <SupportSection />
      </div>
    </div>
  );
};
