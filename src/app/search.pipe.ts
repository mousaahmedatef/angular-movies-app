import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[] , searchTxt: any): any {
    return trendingItems.filter((item)=>{
      //ف انا بقولو لو موجوده title propertyهيا بس الى عندها  movies الفكره هنا ان ال
      //بيبقا tvبتاعهم يحتوي على الكلمه دى ...طيب انا عندى ال title رجعلى كل الي ال
      //ورجعلى كل Tv يبقا دى title فبقولو لو ملقتش ال title بديل ال name property فيها 
      //بتاعهم يحتوي على الكلمه دى name الى ال
      if(item.title){
        return item.title.toLowerCase().includes(searchTxt.toLowerCase());
      }else{
        return item.name.toLowerCase().includes(searchTxt.toLowerCase());
      }
    })
  }

}
