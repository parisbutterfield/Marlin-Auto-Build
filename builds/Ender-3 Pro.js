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
            ["PREHEAT_2_FAN_SPEED",   255]
            //["S_CURVE_ACCELERATION"], Breaks build in Marlin-Auto-Build on Git
            //["INDIVIDUAL_AXIS_HOMING_MENU"],
            //BL Touch changes from https://3dprintscape.com/marlin-firmware-on-creality-board-complete-guide/
            //["BLTOUCH"],
            //["NOZZLE_TO_PROBE_OFFSET", [10, 10, 0]],

            //["RESTORE_LEVELING_AFTER_G28"],
            //["Z_SAFE_HOMING"],
            //If you have z-stop and bltouch probe both plugged in, make these changes as well.
            //["Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"],
            //["USE_PROBE_FOR_Z_HOMING"],

            //UBL
            //["AUTO_BED_LEVELING_UBL"],
            //["G26_MESH_VALIDATION"],
            //["EEPROM_SETTINGS"]
        ],
        disable: [
    "SHOW_CUSTOM_BOOTSCREEN",
    "CUSTOM_STATUS_SCREEN_IMAGE" 
]
    },
    configuration_adv: {
      enable: [
        ["BLTOUCH_DELAY", 500"],
        "BLTOUCH_FORCE_SW_MODE",
        "BLTOUCH_HS_MODE",
        "PROBE_OFFSET_WIZARD",
        ["PROBE_OFFSET_WIZARD_START_Z", -4.0],
        "BABYSTEP_DISPLAY_TOTAL",
        "BABYSTEP_ZPROBE_OFFSET"

],
        disable: [          ]
    }
};
