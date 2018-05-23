import Vue from "vue";
import { abilitiesPlugin } from "@casl/vue";
import { AbilityBuilder } from "@casl/ability";

const ability = AbilityBuilder.define(can => {
  can("read", "post");
});

Vue.use(abilitiesPlugin, ability);
