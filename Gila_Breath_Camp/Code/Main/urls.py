"""Code URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from Python import views

urlpatterns = [
    url(r'^Python/', include('Python.local_urls')),
    url(r'^registration_ui/', views.registration_ui, name='registration_ui'),
	url(r'^test_js/', views.test_js, name='test_js'),
	url(r'^test_js_get_appl/', views.test_js_get_appl, name='test_js_get_appl'),
	url(r'^application_status_send/', views.application_status_send, name='application_status_send'),
	url(r'^application_status_get/', views.application_status_get, name='application_status_get'),
	url(r'^test_submit_checkin/', views.test_submit_checkin, name='test_submit_checkin'),
	url(r'^already_ssn/', views.already_ssn, name='already_ssn'),
	url(r'^print_letter/', views.print_letter, name='print_letter'),
	url(r'^send_cancel/', views.send_cancel, name='send_cancel'),
	url(r'^priorities_get/', views.priorities_get, name='priorities_get'),
	url(r'^priorities_get_guar_ssn/', views.priorities_get_guar_ssn, name='priorities_get_guar_ssn'),
	url(r'^priorities_set_submit/', views.priorities_set_submit, name='priorities_set_submit'),
	url(r'^assignment_tribe/', views.assignment_tribe, name='assignment_tribe'),
	url(r'^assignment_bunkhouse/', views.assignment_bunkhouse, name='assignment_bunkhouse'),
	url(r'^update_get_application/', views.update_get_application, name='update_get_application'),
	url(r'^update_set_application/', views.update_set_application, name='update_set_application'),
	url(r'^test_js_check_in/', views.test_js_check_in, name='test_js_check_in'),

]
