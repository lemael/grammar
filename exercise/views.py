from django.shortcuts import render


def index(request):
  return render(request, 'exercise/index.html')
# Create your views here.
