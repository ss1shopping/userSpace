import React from "react";
import LanguageSelector from "../../../app/partials/layout/LanguageSelector";
import UserProfile from "../../../app/partials/layout/UserProfile";

export default class Topbar extends React.Component {
    render() {
        return (
            <div className="kt-header__topbar">

                <LanguageSelector iconType=""/>
                <UserProfile showAvatar={false} showHi={true} showBadge={false}/>
            </div>
        );
    }
}
