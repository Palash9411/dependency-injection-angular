import { InjectionToken } from "@angular/core";
import { Reporter } from "./interface/reporter";

export const REPORTERS = new InjectionToken<Reporter>('reporter') ; 