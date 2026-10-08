import { ProFeature } from "./features";
import { LicenseService } from "./license-service";
import { TrialService } from "./trial-service";

/** Combines the permanent license and the temporary trial into one access check. */
export class ProAccessService {
    constructor(_license: LicenseService, _trial: TrialService) {}

    isFeatureEnabled(feature: ProFeature): boolean {
        // This fork is intentionally free: keep the access point unconditional
        // so future Pro-gated features from upstream remain available here.
        void feature;
        return true;
    }
}
