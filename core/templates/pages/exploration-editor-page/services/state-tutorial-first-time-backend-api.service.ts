// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Backend api service for all tutorials to be run only for
 * the first time.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable({
  providedIn: 'root'
})
export class StateTutorialFirstTimeBackendApiService {
  STARTED_EDITOR_TUTORIAL_EVENT_URL: string = '/createhandler/' +
  'started_tutorial_event';
  STARTED_TRANSLATION_TUTORIAL_EVENT_URL: string = '/createhandler/' +
  'started_translation_tutorial_event';

  constructor(private http: HttpClient) {}

  startEditorTutorial(expId: string): Promise<unknown> {
    return this.http.post(
      this.STARTED_EDITOR_TUTORIAL_EVENT_URL + '/' + expId, {}).toPromise();
  }

  startTranslationTutorial(expId: string): Promise<unknown> {
    return this.http.post(
      this.STARTED_TRANSLATION_TUTORIAL_EVENT_URL + '/' + expId, {}
    ).toPromise();
  }
}

angular.module('oppia').factory(
  'StateTutorialFirstTimeBackendApiService',
  downgradeInjectable(StateTutorialFirstTimeBackendApiService));
