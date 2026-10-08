import fs from "node:fs";

const path = "src/licensing/pro-access-service.ts";
const source = fs.readFileSync(path, "utf8");
const gated = "return this.license.hasFeature(feature) || this.trial.hasActiveTrial();";
const free = [
    "        // This fork is intentionally free. Keep the centralized access point",
    "        // unconditional so current and future Pro-gated features are available.",
    "        void this.license;",
    "        void this.trial;",
    "        void feature;",
    "        return true;"
].join("\n");

if (source.includes(gated)) {
    fs.writeFileSync(path, source.replace(gated, free));
    process.exit(0);
}

if (source.includes("isFeatureEnabled(feature: ProFeature): boolean") && source.includes("return true;")) {
    process.exit(0);
}

throw new Error("Free-edition policy could not be applied: upstream changed ProAccessService.isFeatureEnabled(). Manual review required.");
