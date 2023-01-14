module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["CUSTOM_MACHINE_NAME", "Ender 3 Pro"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            "PREHEAT_BEFORE_LEVELING"
            ["PREHEAT_1_LABEL", PLA]

        ],
        disable: [
    "SHOW_CUSTOM_BOOTSCREEN",
    "CUSTOM_STATUS_SCREEN_IMAGE"
]
    },
    configuration_adv: {
      enable: [

],
        disable: [          ]
    }
};
