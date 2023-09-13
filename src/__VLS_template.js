import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name, name, addTodo, input_contetnt } from "./App.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).main; ({} as __VLS_IntrinsicElements).main;
({} as __VLS_IntrinsicElements).section; ({} as __VLS_IntrinsicElements).section; ({} as __VLS_IntrinsicElements).section; ({} as __VLS_IntrinsicElements).section;
({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).h4; ({} as __VLS_IntrinsicElements).h4;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["main"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).main;
({} as __VLS_IntrinsicElements).main;
const __VLS_2 = __VLS_1({ ...{ ...{}, class: ("app"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["section"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).section;
({} as __VLS_IntrinsicElements).section;
const __VLS_6 = __VLS_5({ ...{ ...{}, class: ("greeting"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_10 = __VLS_9({ ...{ ...{}, class: ("title"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_14 = __VLS_13({ ...{ ...{}, class: ("title"), type: ("text"), placeholder: ("Name here"), value: ((__VLS_ctx.name)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
}
(__VLS_11.slots!).default;
}
(__VLS_7.slots!).default;
}
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["section"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).section;
({} as __VLS_IntrinsicElements).section;
const __VLS_18 = __VLS_17({ ...{ ...{}, class: ("create-todo"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_22 = __VLS_21({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
(__VLS_23.slots!).default;
}
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, {});
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_26 = __VLS_25({ ...{ ...{ onSubmit: {} as any, }, }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
let __VLS_28 = { 'submit': __VLS_pickEvent(__VLS_27.emit!, 'submit' as const, __VLS_componentProps(__VLS_25, __VLS_26).onSubmit) };
__VLS_28 = {
submit: (__VLS_ctx.addTodo)
};
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["h4"];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, {});
({} as __VLS_IntrinsicElements).h4;
({} as __VLS_IntrinsicElements).h4;
const __VLS_31 = __VLS_30({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
(__VLS_32.slots!).default;
}
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_35 = __VLS_34({ ...{ ...{}, type: ("text"), placeholder: ("e.g. Make a video"), value: ((__VLS_ctx.input_contetnt)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
}
(__VLS_ctx.input_contetnt);
(__VLS_27.slots!).default;
}
(__VLS_19.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[name, addTodo, input_contetnt, input_contetnt,];
return __VLS_slots;
}
