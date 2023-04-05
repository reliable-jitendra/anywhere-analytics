# Analytics.MetricsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgentMetrics**](MetricsApi.md#getAgentMetrics) | **GET** /agents/{id}/metrics | Get Agent metrics
[**getAgentMetricsByDay**](MetricsApi.md#getAgentMetricsByDay) | **GET** /agents/metrics | Get Agent metrics by day
[**getCompanyMetrics**](MetricsApi.md#getCompanyMetrics) | **GET** /companies/{id}/metrics | Get Company metrics
[**getListingMetrics**](MetricsApi.md#getListingMetrics) | **GET** /listings/{id}/metrics | Get Listing metrics
[**getListingMetricsByDay**](MetricsApi.md#getListingMetricsByDay) | **GET** /listings/metrics | Get Listing metrics by day
[**getMetricsMetadata**](MetricsApi.md#getMetricsMetadata) | **GET** /metrics/metadata/{resource} | Get metric definitions
[**getOfficeMetrics**](MetricsApi.md#getOfficeMetrics) | **GET** /office/{id}/metrics | Get Office metrics
[**getTeamMetrics**](MetricsApi.md#getTeamMetrics) | **GET** /team/{id}/metrics | Get Team metrics


<a name="getAgentMetrics"></a>
# **getAgentMetrics**
> getAgentMetrics(id, opts)

Get Agent metrics

Use this method to retrieve Agent metrics.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var id = null; // Object | Unique identifier of Agent. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var opts = { 
  'name': null, // Object | Name of Agent metrics
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'aggregationType': null, // Object | Aggregation type of a metric. Possible value is total.
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAgentMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Unique identifier of Agent. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **name** | [**Object**](.md)| Name of Agent metrics | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **aggregationType** | [**Object**](.md)| Aggregation type of a metric. Possible value is total. | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAgentMetricsByDay"></a>
# **getAgentMetricsByDay**
> getAgentMetricsByDay(parentId, parentType, opts)

Get Agent metrics by day

Use this method to retrieve Agent metrics by day.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var parentId = null; // Object | Unique identifier of parent entity of Agent (office/company). This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var parentType = null; // Object | office/company.

var opts = { 
  'name': null, // Object | Name of the Agent metric. Can enter multiple values; but at least one is required.
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAgentMetricsByDay(parentId, parentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | [**Object**](.md)| Unique identifier of parent entity of Agent (office/company). This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **parentType** | [**Object**](.md)| office/company. | 
 **name** | [**Object**](.md)| Name of the Agent metric. Can enter multiple values; but at least one is required. | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCompanyMetrics"></a>
# **getCompanyMetrics**
> getCompanyMetrics(id, opts)

Get Company metrics

Use this method to retrieve Company metrics.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var id = null; // Object | Unique identifier of Company. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var opts = { 
  'name': null, // Object | Name of Company metrics
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'aggregationType': null, // Object | Aggregation type of a metric. Possible value is total.
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCompanyMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Unique identifier of Company. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **name** | [**Object**](.md)| Name of Company metrics | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **aggregationType** | [**Object**](.md)| Aggregation type of a metric. Possible value is total. | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getListingMetrics"></a>
# **getListingMetrics**
> getListingMetrics(id, opts)

Get Listing metrics

Use this method to retrieve Listing metrics.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var id = null; // Object | Unique identifier of Listing. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var opts = { 
  'name': null, // Object | Name of Listing metric
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'aggregationType': null, // Object | Aggregation type of a metric. Possible value is total.
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getListingMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Unique identifier of Listing. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **name** | [**Object**](.md)| Name of Listing metric | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **aggregationType** | [**Object**](.md)| Aggregation type of a metric. Possible value is total. | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getListingMetricsByDay"></a>
# **getListingMetricsByDay**
> getListingMetricsByDay(parentId, parentType, opts)

Get Listing metrics by day

Use this method to retrieve Listing metrics by day.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var parentId = null; // Object | Unique identifier of parent entity of listing (office/company/agent/team). This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var parentType = null; // Object | office/company/agent/team.

var opts = { 
  'name': null, // Object | Name of the listing metric. Can enter multiple values; but at least one is required. Currently \"TextLeadCount\" is not supported.
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getListingMetricsByDay(parentId, parentType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | [**Object**](.md)| Unique identifier of parent entity of listing (office/company/agent/team). This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **parentType** | [**Object**](.md)| office/company/agent/team. | 
 **name** | [**Object**](.md)| Name of the listing metric. Can enter multiple values; but at least one is required. Currently \"TextLeadCount\" is not supported. | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMetricsMetadata"></a>
# **getMetricsMetadata**
> getMetricsMetadata(resource, opts)

Get metric definitions

Use this method to retrieve all metric definitions. It can be filtered by related resources and metric names. ***List of metric definitions will be restricted by the access level of the caller.***

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var resource = null; // Object | Name of the resource

var opts = { 
  'name': null, // Object | List of metrics names
  'accept': null // Object | application/vnd.realogyfg.v1+json
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getMetricsMetadata(resource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | [**Object**](.md)| Name of the resource | 
 **name** | [**Object**](.md)| List of metrics names | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getOfficeMetrics"></a>
# **getOfficeMetrics**
> getOfficeMetrics(id, opts)

Get Office metrics

Use this method to retrieve Office metrics.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var id = null; // Object | Unique identifier of Office. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var opts = { 
  'name': null, // Object | Name of Office metrics
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'aggregationType': null, // Object | Aggregation type of a metric. Possible value is total.
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOfficeMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Unique identifier of Office. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **name** | [**Object**](.md)| Name of Office metrics | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **aggregationType** | [**Object**](.md)| Aggregation type of a metric. Possible value is total. | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTeamMetrics"></a>
# **getTeamMetrics**
> getTeamMetrics(id, opts)

Get Team metrics

Use this method to retrieve Team metrics.

### Example
```javascript
var Analytics = require('analytics');

var apiInstance = new Analytics.MetricsApi();

var id = null; // Object | Unique identifier of Team. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF

var opts = { 
  'name': null, // Object | Name of Team metrics
  'accept': null, // Object | application/vnd.realogyfg.v1+json
  'aggregationType': null, // Object | Aggregation type of a metric. Possible value is total.
  'source': null, // Object | Source/ website for which metric data should be returned.
  'startTime': null, // Object | Earliest time for which metric data should be returned.
  'endTime': null // Object | Latest time for which metric data should be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTeamMetrics(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Unique identifier of Team. This should be the format - 2E9F9A20-6ABE-4F76-87ED-B8CB6CA02EFF | 
 **name** | [**Object**](.md)| Name of Team metrics | [optional] 
 **accept** | [**Object**](.md)| application/vnd.realogyfg.v1+json | [optional] 
 **aggregationType** | [**Object**](.md)| Aggregation type of a metric. Possible value is total. | [optional] 
 **source** | [**Object**](.md)| Source/ website for which metric data should be returned. | [optional] 
 **startTime** | [**Object**](.md)| Earliest time for which metric data should be returned. | [optional] 
 **endTime** | [**Object**](.md)| Latest time for which metric data should be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

