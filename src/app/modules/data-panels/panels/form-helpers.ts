import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExecutiveGroup} from "../../../models/executiveGroup.model";
import {Executive} from "../../../models/executive.model";


export function BuildExecutiveGroupForm(data?: ExecutiveGroup): FormGroup{
  return new FormGroup({
    name: new FormControl(data?.name || '', [Validators.required, Validators.maxLength(50)]),
  })
}

export function BuildExecutiveTitleForm(data?: Partial<Executive>): FormGroup{
  return new FormGroup({
    title: new FormControl(data?.title || '', [Validators.maxLength(20)]),
    firstName: new FormControl(data?.firstName || '', [Validators.maxLength((30))]),
    lastName: new FormControl(data?.lastName || '', [Validators.maxLength((30))]),
    initials: new FormControl(data?.initials || '', [Validators.maxLength((10))]),
    postTitle: new FormControl(data?.postTitle || '', [Validators.maxLength((20))]),
  });
}

export function BuildExecutiveDetailsForm(data?: Partial<Executive>): FormGroup{

  return new FormGroup({
    systemInitials: new FormControl(data?.systemInitials || '', [Validators.maxLength(10), Validators.required]),
    salutation: new FormControl(data?.salutation || '', [Validators.maxLength(20)]),
    jobTitle: new FormControl(data?.jobTitle || '', [Validators.maxLength(100)]),
    executiveGroup: new FormControl(data?.executiveGroup || {}, [Validators.required]),
  });
}

export function BuildExecutiveForm(data?: Executive): FormGroup{
  return new FormGroup({
    title: new FormControl(data?.title || '', [Validators.maxLength(20)]),
    firstName: new FormControl(data?.firstName || '', [Validators.maxLength((30))]),
    lastName: new FormControl(data?.lastName || '', [Validators.maxLength((30))]),
    initials: new FormControl(data?.initials || '', [Validators.maxLength((10))]),
    postTitle: new FormControl(data?.postTitle || '', [Validators.maxLength((20))]),
    systemInitials: new FormControl(data?.systemInitials || '', [Validators.maxLength(10), Validators.required]),
    salutation: new FormControl(data?.salutation || '', [Validators.maxLength(20)]),
    jobTitle: new FormControl(data?.jobTitle || '', [Validators.maxLength(100)]),
    executiveGroup: new FormControl(data?.executiveGroup || {}, [Validators.required]),
  });
}
