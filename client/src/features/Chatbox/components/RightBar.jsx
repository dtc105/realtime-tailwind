import { useState } from 'react';

function RightBar(props) {
    const [chatSettingsOpen, setChatSettingsOpen] = useState(false);
    const [privacyHelpOpen, setPrivacyHelpOpen] = useState(false);
    const [sharedPhotosOpen, setSharedPhotosOpen] = useState(false);
    const [sharedFilesOpen, setSharedFilesOpen] = useState(false);

    return (
        <main id="rightbar" className="fixed lg:static w-full h-smscreen bg-tran px-4 py-3">
            {/* Return Button */}
            <button
                className="block lg:hidden"
                onClick={() => props.setMenuOpen(0)}
            >
                <img 
                    src="/arrow-left.svg" 
                    alt="arrow left" 
                    className="h-8"
                />
            </button>

            {/* Other User Info */}
            <div className="otherUserInfo flex flex-col justify-center items-center">
                <img 
                    src="/avatar.svg" 
                    alt="avatar icon" 
                    className="h-24" 
                />
                <p className="w-fit text-3xl pt-4 text-zinc-100">Jane Doe</p>
                <p className="text-zinc-300 py-1">{"This is my status <3"}</p>
            </div>

            <hr className="my-3"/>

            {/* Dropdown menus */}
            <div className="dropdowns text-zinc-100 flex flex-col gap-4">
                {/* Chat Settings */}
                <div className="chatSettings flex flex-col gap-4 justify-center items-center">
                    <div 
                        className="title flex gap-4 justify-center items-center flex gap-4 justify-center items-center"
                        onClick={() => setChatSettingsOpen(prev => !prev)}
                    >
                        <span className="text-2xl">Chat Settings</span>
                        <button
                            className="w-fit h-fit p-1.5 rounded-round border" 
                        >
                            <img 
                                src={chatSettingsOpen ? "/chevron-down.svg" : "/chevron-up.svg"} 
                                alt="collapse"
                            />
                        </button>
                    </div>
                    <div className={`content ${chatSettingsOpen ? "block" : "hidden"}`}>
                        <p>Content</p>
                    </div>
                </div>

                {/* Privacy & Help */}
                <div className="privacyHelp flex flex-col gap-4 justify-center items-center">
                    <div 
                        className="title flex gap-4 justify-center items-center"
                        onClick={() => setPrivacyHelpOpen(prev => !prev)}
                    >
                        <span className="text-2xl">Privacy & Help</span>
                        <button
                            className="w-fit h-fit p-1.5 rounded-round border"
                        >
                            <img 
                                src={privacyHelpOpen ? "/chevron-down.svg" : "/chevron-up.svg"} 
                                alt="collapse" 
                            />
                        </button>
                    </div>
                    <div className={`content ${privacyHelpOpen ? "block" : "hidden"}`}>
                        <p>Content</p>
                    </div>
                </div>

                {/* Shared Photos */}
                <div className="sharedPhotos flex flex-col gap-4 justify-center items-center">
                    <div 
                        className="title flex gap-4 justify-center items-center"
                        onClick={() => setSharedPhotosOpen(prev => !prev)}
                    >
                        <span className="text-2xl">Shared Photos</span>
                        <button
                            className="w-fit h-fit p-1.5 rounded-round border"
                        >
                            <img 
                                src={sharedPhotosOpen ? "/chevron-down.svg" : "/chevron-up.svg"} 
                                alt="collapse" 
                            />
                        </button>
                    </div>
                    <div className={`content ${sharedPhotosOpen ? "block" : "hidden"}`}>
                        <p>Content</p>
                    </div>
                </div>

                {/* Shared Files */}
                <div className="sharedFiles flex flex-col gap-4 justify-center items-center">
                    <div 
                        className="title flex gap-4 justify-center items-center"
                        onClick={() => setSharedFilesOpen(prev => !prev)}
                    >
                        <span className="text-2xl">Shared Files</span>
                        <button
                            className="w-fit h-fit p-1.5 rounded-round border"
                        >
                            <img 
                                src={sharedFilesOpen ? "/chevron-down.svg" : "/chevron-up.svg"} 
                                alt="collapse" 
                            />
                        </button>
                    </div>
                    <div className={`content ${sharedFilesOpen ? "block" : "hidden"}`}>
                        <p>Content</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RightBar;
