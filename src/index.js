/*
 * analytics
 *  **Note:** *Realogy hosts are deprecated (https://\\*.api.realogy.com). *We recommend the use of Anywhere API hosts (https://\\*.api.anywhere.re).**      **New Consumers** *- Use https://\\*.api.anywhere.re*      **Existing Consumers** *- https://\\**.api.realogy.com *will continue to work as-is, but plan to use https://\\*.api.anywhere.re host*.    ## Overview  This API is use to retrieve all the metric definitions, team metrics, office metrics, agent metrics, company metrics and listing metrics.  ## Use this API to  - fetch metric definitions. - fetch agent metrics. - get company metrics. - retrieve listing metrics. - get office and team metrics.   ## How Analytics API Works - Retrieve all the metric definitions. It can be filtered by related resources and metric names. - Retrieve listing metrics and agent metrics by day. - This API is used to fetch office, company and team metrics.    ## Generic Information - A response is always sent for a request. Make sure that your application does not time-out. - If the API is triggered again, avoid use of short retry periods to keep out of rate limiting scenarios.  ## Prerequisites To use this API in a production environment, you must have the following details:  - API Key. - Okta credentials. - Okta scope - [https://btt.realogyfg.com/analyticsapi](https://btt.realogyfg.com/analyticsapi).  ## How to Register and Create an Account To use the Analytics API, do the steps as follows:     1. Go to [Anywhere Developer Portal](https://developers.anywhere.re) and [Login](https://developers.anywhere.re/user/me). 2. See the API product features and requirements. 3. Use Get Access and get the API credentials. 4. Refer to [How it Works](https://developers.anywhere.re/docs/how-it-works) for more details. ## Sandbox Access   For Sandbox access, visit the Sandbox Portal URL <a href=\"https://developers.anywhere.re/add-app\" target=\"_blank\">Get Sandbox product access</a>.   ## Production Access    For Production access, visit the Production Portal URL <a href=\"https://developers.anywhere.re/add-app\" target=\"_blank\">Get Production product access</a>. 
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'analyticsApi/MetricsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./analyticsApi/MetricsApi'));
  }
}(function(ApiClient, MetricsApi) {
  'use strict';

  /**
   * Note_Realogy_hosts_are_deprecated__https_api_realogy_com__We_recommend_the_use_of_Anywhere_API_hosts__https_api_anywhere_re____New_Consumers___Use_https_api_anywhere_re___Existing_Consumers___https_api_realogy_com_will_continue_to_work_as_is_but_plan_to_use_https_api_anywhere_re_host__OverviewThis_API_is_use_to_retrieve_all_the_metric_definitions_team_metrics_office_metrics_agent_metrics_company_metrics_and_listing_metrics__Use_this_API_to__fetch_metric_definitions___fetch_agent_metrics___get_company_metrics___retrieve_listing_metrics___get_office_and_team_metrics___How_Analytics_API_Works__Retrieve_all_the_metric_definitions__It_can_be_filtered_by_related_resources_and_metric_names___Retrieve_listing_metrics_and_agent_metrics_by_day___This_API_is_used_to_fetch_office_company_and_team_metrics____Generic_Information__A_response_is_always_sent_for_a_request__Make_sure_that_your_application_does_not_time_out___If_the_API_is_triggered_again_avoid_use_of_short_retry_periods_to_keep_out_of_rate_limiting_scenarios__PrerequisitesTo_use_this_API_in_a_production_environment_you_must_have_the_following_details__API_Key___Okta_credentials___Okta_scope____httpsbtt_realogyfg_comanalyticsapi_httpsbtt_realogyfg_comanalyticsapi__How_to_Register_and_Create_an_AccountTo_use_the_Analytics_API_do_the_steps_as_follows___1__Go_to__Anywhere_Developer_Portal_httpsdevelopers_anywhere_re_and_Login_httpsdevelopers_anywhere_reuserme_2__See_the_API_product_features_and_requirements_3__Use_Get_Access_and_get_the_API_credentials_4__Refer_to__How_it_Works_httpsdevelopers_anywhere_redocshow_it_works_for_more_details__Sandbox_Access_For_Sandbox_access_visit_the_Sandbox_Portal_URL_a_hrefhttpsdevelopers_anywhere_readd_app_target_blankGet_Sandbox_product_accessa___Production_Access__For_Production_access_visit_the_Production_Portal_URL_a_hrefhttpsdevelopers_anywhere_readd_app_target_blankGet_Production_product_accessa_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Analytics = require('index'); // See note below*.
   * var xxxSvc = new Analytics.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Analytics.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Analytics.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Analytics.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The MetricsApi service constructor.
     * @property {module:analyticsApi/MetricsApi}
     */
    MetricsApi: MetricsApi
  };

  return exports;
}));
