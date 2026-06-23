import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { CronFormat } from '@vue-js-cron/core';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Field } from '@vue-js-cron/core';
import { FieldItem } from '@vue-js-cron/core';
import { Localization } from '@vue-js-cron/core';
import { Period } from '@vue-js-cron/core';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

export declare const CronVuetify: DefineComponent<ExtractPropTypes<{
modelValue: {
type: StringConstructor;
};
period: {
type: StringConstructor;
};
format: {
type: PropType<CronFormat>;
};
locale: {
type: StringConstructor;
};
fields: {
type: PropType<Field[]>;
};
periods: {
type: PropType<Period[]>;
};
customLocale: {
type: PropType<Localization>;
};
cols: {
type: PropType<Record<string, number>>;
default: () => {
second: number;
minute: number;
hour: number;
day: number;
};
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
/**
* Properties of Vuetify VChip
*
* @remarks
* See {@link https://vuetifyjs.com/en/api/v-chip/#props}
*/
chipProps: {
type: ObjectConstructor;
default(): {};
};
}>, {
cron: Ref<string, string>;
error: Ref<string, string>;
segments: {
id: string;
items: FieldItem[];
cron: Ref<string, string>;
selected: Ref<number[], number[]>;
error: Ref<string, string>;
select: (evt: number[]) => void;
text: Ref<string, string>;
prefix: Ref<string, string>;
suffix: Ref<string, string>;
}[];
selected: ComputedRef<    {
id: string;
items: FieldItem[];
cron: Ref<string, string>;
selected: Ref<number[], number[]>;
error: Ref<string, string>;
select: (evt: number[]) => void;
text: Ref<string, string>;
prefix: Ref<string, string>;
suffix: Ref<string, string>;
}[]>;
period: {
select: (periodId: string) => void;
selected: Ref<    {
id: string;
value: string[];
text?: string | undefined;
} | {
text: any;
id: string;
value: string[];
}, Period | {
text: any;
id: string;
value: string[];
} | {
id: string;
value: string[];
text?: string | undefined;
} | {
text: any;
id: string;
value: string[];
}>;
items: {
text: any;
id: string;
value: string[];
}[];
prefix: Ref<string, string>;
suffix: Ref<string, string>;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("error" | "update:model-value" | "update:period")[], "error" | "update:model-value" | "update:period", PublicProps, Readonly<ExtractPropTypes<{
modelValue: {
type: StringConstructor;
};
period: {
type: StringConstructor;
};
format: {
type: PropType<CronFormat>;
};
locale: {
type: StringConstructor;
};
fields: {
type: PropType<Field[]>;
};
periods: {
type: PropType<Period[]>;
};
customLocale: {
type: PropType<Localization>;
};
cols: {
type: PropType<Record<string, number>>;
default: () => {
second: number;
minute: number;
hour: number;
day: number;
};
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
/**
* Properties of Vuetify VChip
*
* @remarks
* See {@link https://vuetifyjs.com/en/api/v-chip/#props}
*/
chipProps: {
type: ObjectConstructor;
default(): {};
};
}>> & Readonly<{
"onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
onError?: ((...args: any[]) => any) | undefined;
"onUpdate:period"?: ((...args: any[]) => any) | undefined;
}>, {
chipProps: Record<string, any>;
cols: Record<string, number>;
disabled: boolean;
}, {}, {
CustomSelect: DefineComponent<ExtractPropTypes<{
menuProps: {
type: ObjectConstructor;
default: () => void;
};
chipProps: {
type: ObjectConstructor;
default: () => void;
};
modelValue: {
type: PropType<any>;
};
selection: {
type: StringConstructor;
};
clearable: {
type: BooleanConstructor;
default: boolean;
};
items: {
type: PropType<any[]>;
default: () => never[];
};
multiple: {
type: BooleanConstructor;
default: boolean;
};
cols: {
type: NumberConstructor;
default: number;
};
itemText: {
type: PropType<string | ((item: any) => string)>;
default: string;
};
itemValue: {
type: PropType<string | ((item: any) => any)>;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}>, {
select: (item: any) => void;
selected: Ref<any, any>;
selectedStr: Ref<string, string>;
itemRows: any[][];
setItems: (items: any[]) => void;
setValues: (values: any) => void;
isEmpty: ComputedRef<boolean>;
has: (item: any) => boolean;
values: Set<any>;
add: (item: any) => void;
toggle: (item: any) => void;
remove: (item: any) => void;
clear: () => void;
updated: Ref<number, number>;
equals: (items: any[]) => boolean;
}, {}, {}, {
chipIcon(): null;
}, ComponentOptionsMixin, ComponentOptionsMixin, "update:model-value"[], "update:model-value", PublicProps, Readonly<ExtractPropTypes<{
menuProps: {
type: ObjectConstructor;
default: () => void;
};
chipProps: {
type: ObjectConstructor;
default: () => void;
};
modelValue: {
type: PropType<any>;
};
selection: {
type: StringConstructor;
};
clearable: {
type: BooleanConstructor;
default: boolean;
};
items: {
type: PropType<any[]>;
default: () => never[];
};
multiple: {
type: BooleanConstructor;
default: boolean;
};
cols: {
type: NumberConstructor;
default: number;
};
itemText: {
type: PropType<string | ((item: any) => string)>;
default: string;
};
itemValue: {
type: PropType<string | ((item: any) => any)>;
default: string;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{
"onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}>, {
menuProps: Record<string, any>;
chipProps: Record<string, any>;
clearable: boolean;
items: any[];
multiple: boolean;
cols: number;
itemText: string | ((item: any) => string);
itemValue: string | ((item: any) => any);
disabled: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const CronVuetifyPlugin: {
    install: (app: App) => void;
};
export { CronVuetifyPlugin }
export default CronVuetifyPlugin;

/**
 * Props of {@link CronVuetify}
 *
 * See {@link @vue-js-cron/core!CronCoreProps | CronCoreProps} for a detailed description of each prop
 *
 * @interface
 */
export declare type CronVuetifyProps = Partial<ExtractPropTypes<ReturnType<typeof cronVuetifyProps>>>;

export declare const cronVuetifyProps: () => {
    modelValue: {
        type: StringConstructor;
    };
    period: {
        type: StringConstructor;
    };
    format: {
        type: PropType<CronFormat>;
    };
    locale: {
        type: StringConstructor;
    };
    fields: {
        type: PropType<Field[]>;
    };
    periods: {
        type: PropType<Period[]>;
    };
    customLocale: {
        type: PropType<Localization>;
    };
    cols: {
        type: PropType<Record<string, number>>;
        default: () => {
            second: number;
            minute: number;
            hour: number;
            day: number;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Properties of Vuetify VChip
     *
     * @remarks
     * See {@link https://vuetifyjs.com/en/api/v-chip/#props}
     */
    chipProps: {
        type: ObjectConstructor;
        default(): {};
    };
};

export { }
