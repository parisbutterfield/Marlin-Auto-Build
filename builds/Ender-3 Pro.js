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
            "PREHEAT_BEFORE_LEVELING",
            ["PREHEAT_1_LABEL",       "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 205],
            ["PREHEAT_1_TEMP_BED",     60],
            ["PREHEAT_1_TEMP_CHAMBER", 35],
            ["PREHEAT_1_FAN_SPEED",   255],

            ["PREHEAT_2_LABEL",       "PETG"],
            ["PREHEAT_2_TEMP_HOTEND", 235],
            ["PREHEAT_2_TEMP_BED",     70],
            ["PREHEAT_2_TEMP_CHAMBER", 35],
            ["PREHEAT_2_FAN_SPEED",   255],
            ["S_CURVE_ACCELERATION"],
            ["LEVEL_BED_CORNERS"],
            ["INDIVIDUAL_AXIS_HOMING_MENU"]

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
