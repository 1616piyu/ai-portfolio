type SectionTitleProps = {

title:string;

subtitle:string;

};

export default function SectionTitle({

title,

subtitle

}:SectionTitleProps){

return(

<div className="text-center mb-16">

<p className="text-cyan-400 uppercase tracking-widest">

{subtitle}

</p>

<h2 className="text-5xl font-bold mt-3">

{title}

</h2>

</div>

);

}