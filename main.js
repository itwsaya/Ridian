/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var de=Object.create;var M=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var ge=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var fe=(h,f)=>{for(var e in f)M(h,e,{get:f[e],enumerable:!0})},te=(h,f,e,t)=>{if(f&&typeof f=="object"||typeof f=="function")for(let n of ue(f))!me.call(h,n)&&n!==e&&M(h,n,{get:()=>f[n],enumerable:!(t=he(f,n))||t.enumerable});return h};var B=(h,f,e)=>(e=h!=null?de(ge(h)):{},te(f||!h||!h.__esModule?M(e,"default",{value:h,enumerable:!0}):e,h)),we=h=>te(M({},"__esModule",{value:!0}),h);var xe={};fe(xe,{default:()=>O});module.exports=we(xe);var u=require("obsidian"),ne=require("child_process"),k=B(require("fs")),L=B(require("path")),se=require("util"),ie=B(require("os")),ae=require("crypto"),oe=require("url"),ve=(0,se.promisify)(k.mkdtemp),$="r-environment-view",D="r-help-view",ye={rExecutablePath:"/usr/local/bin/R",rstudioPandocPath:"/opt/homebrew/bin/"},U=class extends u.ItemView{constructor(e){super(e);this.environmentData=[];this.noteTitle=""}getViewType(){return $}getDisplayText(){return"R Environment"}getIcon(){return"table"}async onOpen(){console.log("REnvironmentView opened"),this.containerEl.empty(),this.render()}async onClose(){console.log("REnvironmentView closed")}updateEnvironmentData(e,t){console.log(`Updating environment data for note: ${e}`,t),this.noteTitle=e,this.environmentData=t,this.render()}render(){console.log("REnvironmentView render called with data:",this.environmentData),this.containerEl.empty();let e=document.createElement("div");e.style.padding="10px",e.style.overflowY="auto";let t=document.createElement("h5");t.textContent=`R environment for ${this.noteTitle}`,t.style.fontFamily='"Poppins", sans-serif',t.style.fontSize="18px",t.style.fontWeight="600",t.style.marginBottom="15px",t.style.padding="10px",t.style.borderRadius="8px",t.style.textAlign="center",t.classList.add("theme-aware-title"),e.appendChild(t);let n=document.createElement("table");n.style.width="100%",n.style.borderCollapse="separate",n.style.borderSpacing="0",n.style.fontFamily="'Monaco', 'monospace'",n.style.whiteSpace="nowrap",n.style.overflow="hidden",n.style.borderRadius="12px",n.style.tableLayout="fixed",n.style.border="1px solid rgba(200, 200, 200, 0.3)",n.classList.add("theme-aware-table");let s=document.createElement("tr");["Name","Type","Size","Value"].forEach((r,a)=>{let i=document.createElement("th");i.textContent=r,i.style.padding="12px",i.style.textAlign="left",i.style.fontFamily='"Poppins", sans-serif',i.style.fontSize="12px",i.style.fontWeight="600",i.style.borderBottom="2px solid rgba(200, 200, 200, 0.5)",i.style.borderRight="1px solid rgba(200, 200, 200, 0.3)",r==="Type"&&(i.style.width="90px"),r==="Size"&&(i.style.width="80px"),r==="Name"&&(i.style.width="60px"),s.appendChild(i)}),n.appendChild(s),this.environmentData.forEach(r=>{let a=document.createElement("tr");a.style.transition="background-color 0.3s",a.style.borderRadius="12px",a.classList.add("theme-aware-row"),a.addEventListener("mouseover",()=>{a.style.backgroundColor="var(--hover-background-color)"}),a.addEventListener("mouseout",()=>{a.style.backgroundColor="var(--row-background-color)"});let i=(R,C="left")=>{let g=document.createElement("td");return g.textContent=R,g.style.padding="12px",g.style.borderBottom="1px solid rgba(200, 200, 200, 0.5)",g.style.borderRight="1px solid rgba(200, 200, 200, 0.3)",g.style.textAlign=C,g.style.fontSize="12px",g.style.overflow="hidden",g.style.textOverflow="ellipsis",g.classList.add("theme-aware-cell"),C==="left"&&R===r.value&&(g.style.width="65%"),g},d=i(r.name);a.appendChild(d);let m=i(Array.isArray(r.type)?r.type.join(", "):r.type);a.appendChild(m);function y(R){let C=["B","KB","MB","GB","TB"];if(R==0)return"0 Byte";let g=Math.floor(Math.log(R)/Math.log(1024));return(R/Math.pow(1024,g)).toFixed(1)+" "+C[g]}let c=i(y(r.size),"right");a.appendChild(c);let x=Array.isArray(r.value)?r.value.slice(0,5).join(", ")+" ...":r.value.toString(),v=i(x);v.style.whiteSpace="nowrap",v.style.width="65%",a.appendChild(v),n.appendChild(a)}),e.appendChild(n),this.containerEl.appendChild(e);let w=document.createElement("style");w.textContent=`
      .theme-aware-title, .theme-aware-table, .theme-aware-cell, .theme-aware-row {
        color: var(--text-normal);
        background: var(--background-primary);
      }
      .theme-aware-row {
        background: var(--background-secondary);
      }
      .theme-aware-row:hover {
        background: var(--background-hover);
      }
      .theme-aware-table th {
        color: var(--text-muted);
      }
    `,document.head.appendChild(w)}},j=class extends u.ItemView{constructor(e){super(e);this.helpContent=""}getViewType(){return D}getDisplayText(){return"R Help"}getIcon(){return"info"}async onOpen(){console.log("RHelpView opened"),this.contentEl.empty(),this.render()}async onClose(){console.log("RHelpView closed")}updateHelpContent(e){console.log("Updating help content in RHelpView with content:",e),this.helpContent=e,this.render()}render(){console.log("RHelpView render called with help content:",this.helpContent),this.contentEl.empty();let e=document.createElement("div");e.style.padding="1px",e.style.overflowY="auto",e.style.fontFamily="sans-serif",e.innerHTML=this.helpContent;let t=document.createElement("style");t.innerHTML=`
        code {
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.95em;
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
    `,e.appendChild(t),this.contentEl.appendChild(e)}},z=class extends u.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"R Integration Settings"});function t(n){return navigator.platform.includes("Win")?n.replace(/\\/g,"\\\\").replace(/\//g,"\\\\"):n}new u.Setting(e).setName("Path to R Executable").setDesc("Specify the full path to your R executable.").addText(n=>n.setPlaceholder("/usr/local/bin/R").setValue(t(this.plugin.settings.rExecutablePath)).onChange(async s=>{let o=t(s.trim());console.log("R Executable Path changed to: "+o),this.plugin.settings.rExecutablePath=o,await this.plugin.saveSettings(),new u.Notice("R executable path updated successfully.")})),new u.Setting(e).setName("Path to RStudio Pandoc").setDesc("Specify the full path to your RStudio Pandoc installation.").addText(n=>n.setPlaceholder("/opt/homebrew/bin/").setValue(t(this.plugin.settings.rstudioPandocPath)).onChange(async s=>{let o=t(s.trim());console.log("RStudio Pandoc Path changed to: "+o),this.plugin.settings.rstudioPandocPath=o,await this.plugin.saveSettings(),new u.Notice("RStudio Pandoc path updated successfully.")}))}},O=class extends u.Plugin{constructor(){super(...arguments);this.rProcesses=new Map}generateUniqueId(e){return(0,ae.createHash)("sha256").update(e.toString()).digest("hex").substring(0,8)}async loadSettings(){this.settings=Object.assign({},ye,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async onload(){console.log("Loading R Code Evaluator Plugin"),await this.loadSettings(),this.addSettingTab(new z(this.app,this)),this.registerView($,e=>new U(e)),this.registerView(D,e=>new j(e)),this.app.workspace.onLayoutReady(()=>{if(console.log("Workspace is ready, adding R Environment and Help views"),this.app.workspace.getLeavesOfType($).length===0){let e=this.app.workspace.getRightLeaf(!1);e?e.setViewState({type:$,active:!0}).then(()=>{console.log("REnvironmentView added to the right pane")}).catch(t=>{console.error("Failed to add REnvironmentView to the right pane:",t)}):console.error("Failed to obtain the right workspace leaf for REnvironmentView.")}else console.log("REnvironmentView already exists in the workspace");if(this.app.workspace.getLeavesOfType(D).length===0){let e=this.app.workspace.getRightLeaf(!0);e?e.setViewState({type:D,active:!0}).then(()=>{console.log("RHelpView added to the right pane")}).catch(t=>{console.error("Failed to add RHelpView to the right pane:",t)}):console.error("Failed to obtain the right workspace leaf for RHelpView.")}else console.log("RHelpView already exists in the workspace")}),this.addCommand({id:"run-current-code-chunk",name:"Run Current Code Chunk",editorCallback:(e,t)=>{if(!t.file){new u.Notice("No file associated with the current view."),console.error("No file associated with the current view.");return}let n=t.file.basename;this.runCurrentCodeChunk(e,t,n)},hotkeys:[{modifiers:["Mod"],key:"r"}]}),console.log("R Code Evaluator Plugin loaded successfully")}onunload(){console.log("Unloading R Code Evaluator Plugin"),this.rProcesses.forEach((e,t)=>{console.log(`Terminating R process for note: ${t}`),e.kill()}),this.rProcesses.clear(),this.app.workspace.getLeavesOfType($).forEach(e=>{console.log("Detaching REnvironmentView from workspace"),e.detach()}),console.log("R Code Evaluator Plugin unloaded successfully")}runCurrentCodeChunk(e,t,n){var a;let s=e.getCursor(),{startLine:o,endLine:p,code:w,existingLabel:r}=this.getCurrentCodeChunk(e,s.line);if(w){let i=r||this.generateUniqueId(o),d=(a=t.file)==null?void 0:a.path;if(d){r||this.insertLabel(e,o,i),console.log(`Running current code chunk in note: ${d} with ID: ${i}`);let m=/\?\s*\w+/.test(w)||/help\s*\(\s*\w+\s*\)/.test(w);this.runRCodeInSession(d,w,n,i,m).then(({result:y,imagePaths:c,widgetPaths:x,helpContent:v})=>{console.log("R code executed successfully"),m?new u.Notice("Help content updated in the sidebar."):this.insertOutputWithCallout(e,p,y,c,x,i)}).catch(y=>{console.error("Error executing R code:",y),this.insertOutputWithCallout(e,p,`Error:
${y}`,[],[],i)})}else new u.Notice("No file associated with the current view."),console.error("No file associated with the current view.")}else new u.Notice("No R code chunk found at the cursor position."),console.log("No R code chunk found at the cursor position.")}getCurrentCodeChunk(e,t){let n=e.lineCount(),s=t,o=t,p=null;for(;s>=0&&!e.getLine(s).startsWith("```r");)s--;if(s<0)return{startLine:-1,endLine:-1,code:"",existingLabel:null};for(o=s+1;o<n&&!e.getLine(o).startsWith("```");)o++;if(o>=n)return{startLine:-1,endLine:-1,code:"",existingLabel:null};let w=[];for(let d=s+1;d<o;d++)w.push(e.getLine(d));let r=w.join(`
`),i=e.getLine(s).match(/\{#([^\}]+)\}/);return i&&(p=i[1]),console.log(`Found code chunk from line ${s} to ${o} with label: ${p}`),{startLine:s,endLine:o,code:r,existingLabel:p}}insertLabel(e,t,n){let s=e.getLine(t);if(s.includes("{#"))return;let o=s.replace(/```r/,`\`\`\`r {#${n}}`);e.setLine(t,o),console.log(`Inserted label {#${n}} into code chunk at line ${t}`)}insertOutputWithCallout(e,t,n,s,o,p){console.log("Inserting or updating output callout and images into the editor");let w=`> [!OUTPUT]+ {#output-${p}}
> 
`,r="> ",a=w,i=n.trim().split(`
`).map(c=>r+c);a+=i.join(`
`),s.forEach(c=>{let v=`![center| 480 ](${`${c}`})`;a+=`
${r} ${v}`}),o.forEach(c=>{let v=`<iframe src="${`${c}`}" width="100%" height="680px"></iframe>`;a+=`
${r} ${v}`}),a+=`
> 
`;let d=-1,m=-1,y=e.lineCount();for(let c=0;c<y;c++)if(e.getLine(c).trim()===`> [!OUTPUT]+ {#output-${p}}`){for(d=c,m=c;m+1<y;){let v=e.getLine(m+1);if(!v.startsWith("> ")&&v.trim()!=="")break;m++}break}if(d!==-1&&m!==-1){let c={line:d,ch:0},x={line:m+1,ch:0};e.replaceRange(a+`
`,c,x),console.log(`Replaced existing output callout for ID: ${p}`)}else{let c={line:t+1,ch:0};e.replaceRange(`
`+a+`
`,c),console.log(`Inserted new output callout for ID: ${p}`)}}getRProcess(e){let t=this.rProcesses.get(e);return t||(t=this.startRProcess(e)),t}startRProcess(e){let t=this.settings.rExecutablePath||"/usr/local/bin/R";if(console.log(`Starting R process for note: ${e} using executable: ${t}`),!k.existsSync(t))throw new u.Notice(`R executable not found at ${t}. Please update the path in settings.`),console.error(`R executable not found at ${t}.`),new Error(`R executable not found at ${t}.`);let n={...process.env},s=(0,ne.spawn)(t,["--vanilla","--quiet","--slave"],{stdio:"pipe",env:n});s.on("error",p=>{console.error(`Failed to start R process for ${e}:`,p)});let o=`
library(jsonlite)
if (!exists("user_env")) {
  user_env <- new.env()
}


# prevent browser:
options(browser='false')
options(bitmapType = 'cairo')
options(device = function(...) jpeg(filename = tempfile(), width=800, height=600, ...))
    `;return s.stdin.write(o+`
`),this.rProcesses.set(e,s),console.log(`R process started and stored for note: ${e}`),s}async runRCodeInSession(e,t,n,s,o){console.log("runRCodeInSession called for note:",e,"with ID:",s);let p=this.getRProcess(e);return new Promise(async(w,r)=>{let a="",i="",d=await ve(L.join(ie.tmpdir(),"rplots-")),m=process.platform==="win32"?d.replace(/\\/g,"\\\\"):d.replace(/\\/g,"/"),y=L.join(m,`help_${s}.txt`),c=process.platform==="win32"?y.replace(/\\/g,"\\\\"):y.replace(/\\/g,"/"),x=`__END_OF_OUTPUT__${Date.now()}__`,v="__PLOT_PATH__",R=`__ENVIRONMENT_DATA__${Date.now()}__`,C="__WIDGET_PATH__",g=`
library(evaluate)
library(jsonlite)
library(htmlwidgets)
Sys.setenv(RSTUDIO_PANDOC='${this.settings.rstudioPandocPath}')

# Define our custom print function
custom_print_htmlwidget <- function(x, ..., viewer = NULL) {
    # Generate a unique filename
    
    widgetFileName <- paste0("widget_${s}_",".html")
    widgetFilePath <- file.path("${m}", widgetFileName)
    # Save the widget to the file
    saveWidget(x, widgetFilePath, selfcontained = TRUE)
    # Output a marker to indicate the widget was saved
    cat("${C}", widgetFileName, "\\n", sep="")
}

# Replace the original function in the 'htmlwidgets' namespace
environment(custom_print_htmlwidget) <- asNamespace('htmlwidgets')
assignInNamespace("print.htmlwidget", custom_print_htmlwidget, envir = as.environment("package:htmlwidgets"))



timecheck <- Sys.time()

# override help
.getHelpFile <- function(file)
{
    path <- dirname(file)
    dirpath <- dirname(path)
    if(!file.exists(dirpath))
        stop(gettextf("invalid %s argument", sQuote("file")), domain = NA)
    pkgname <- basename(dirpath)
    RdDB <- file.path(path, pkgname)
    if(!file.exists(paste(RdDB, "rdx", sep = ".")))
        stop(gettextf("package %s exists but was not installed under R >= 2.10.0 so help cannot be accessed", sQuote(pkgname)), domain = NA)
    tools:::fetchRdDB(RdDB, basename(file))
}


print.help_files_with_topic <- function(x, ...)
{
  browser <- getOption("browser")
  topic <- attr(x, "topic")
  type <- "text"
  paths <- as.character(x)
  
  if(!length(paths)) {
    writeLines(c(gettextf("No documentation for %s in specified packages and libraries:",
                          sQuote(topic)),
                 gettextf("you could try %s",
                          sQuote(paste0("??", topic)))))
    return(invisible(x))
  }
  
  port <- NULL
  
  if(attr(x, "tried_all_packages")) {
    paths <- unique(dirname(dirname(paths)))
    msg <- gettextf("Help for topic %s is not in any loaded package but can be found in the following packages:",
                    sQuote(topic))
    
      writeLines(c(strwrap(msg), "",
                   paste(" ",
                         formatDL(c(gettext("Package"), basename(paths)),
                                  c(gettext("Library"), dirname(paths)),
                                  indent = 22))))
    } else {
    if(length(paths) > 1L) {
      file <- paths[1L]
      p <- paths
      msg <- gettextf("Help on topic %s was found in the following packages:",
                      sQuote(topic))
      paths <- dirname(dirname(paths))
      txt <- formatDL(c("Package", basename(paths)),
                      c("Library", dirname(paths)),
                      indent = 22L)
      writeLines(c(strwrap(msg), "", paste(" ", txt), ""))
      if(interactive()) {
        fp <- file.path(paths, "Meta", "Rd.rds")
        tp <- basename(p)
        titles <- tp
        if(type == "html" || type == "latex")
          tp <- tools::file_path_sans_ext(tp)
        for (i in seq_along(fp)) {
          tmp <- try(readRDS(fp[i]))
          titles[i] <- if(inherits(tmp, "try-error"))
            "unknown title" else
              tmp[tools::file_path_sans_ext(tmp$File) == tp[i], "Title"]
        }
        txt <- paste0(titles, " {", basename(paths), "}")
        ## the default on menu() is currtently graphics = FALSE
        res <- menu(txt, title = gettext("Choose one"),
                    graphics = getOption("menu.graphics"))
        if(res > 0) file <- p[res]
      } else {
        writeLines(gettext("
Using the first match ..."))
      }
    }
    else
      file <- paths
    
    if(type == "text") {
      pkgname <- basename(dirname(dirname(file)))
      tools::Rd2HTML(.getHelpFile(file), out = "${c}",
                            package = pkgname)

    }
    
  }
  
  invisible(x)
}

# Ensure user environment exists
if (!exists("user_env")) {
  user_env <- new.env()
}
# Evaluate code and capture results
results <- evaluate(${JSON.stringify(t)}, envir = user_env)

# Initialize outputs and image paths
outputs <- character()
imagePaths <- character()

# Process the results
for (res in results) {
  if (inherits(res, "source")) {
    # Ignore source elements
  } else if (inherits(res, "warning")) {
    outputs <- c(outputs, paste("Warning:", conditionMessage(res)))
  } else if (inherits(res, "message")) {
    outputs <- c(outputs, conditionMessage(res))
  } else if (inherits(res, "error")) {
    outputs <- c(outputs, paste("Error:", conditionMessage(res)))
  } else if (inherits(res, "character")) {

      val_str <- res
      outputs <- c(outputs, val_str)

  } else if (inherits(res, "recordedplot")) {
    # Save the plot to a file using uniqueId
    timestamp <- format(Sys.time(), "%Y%m%d%H%M%S")
    plotFileName <- paste0("plot_${s}_", length(imagePaths) + 1, "_", timestamp, ".jpg")
    plotFilePath <- file.path("${m}", plotFileName)
    jpeg(filename=plotFilePath, width=800, height=600)
    replayPlot(res)
    dev.off()
    imagePaths <- c(imagePaths, plotFileName)
  }
}

# Output the collected outputs
if (length(outputs) > 0) {
  cat(paste(outputs, collapse = "\\n"), "\\n")
}


# Attempt to retrieve the last animation, if any
if (requireNamespace("gganimate", quietly = TRUE)) {
  anim <- try(gganimate::last_animation(), silent = TRUE)
  
  
  
    if (is.character(anim[1])) {
    if(file.info(anim[1])$mtime > timecheck){
    # 'anim' is a file path to the GIF
    timestamp <- format(Sys.time(), "%Y%m%d%H%M%S")
    animFileName <- paste0("animation_${s}_", timestamp, ".gif")
    animFilePath <- file.path("${m}", animFileName)  # Corrected line
    file.copy(anim[1], animFilePath)
    imagePaths <- c(imagePaths, animFileName)
    }}
    
  
}

# Output image markers
for (img in imagePaths) {
  cat("${v}", img, "\\n", sep="")
}

# Output the environment data
vars <- ls(envir = user_env)
env_list <- lapply(vars, function(var_name) {
  var_value <- get(var_name, envir = user_env)
  var_class <- class(var_value)
  var_size <- as.numeric(object.size(var_value)) # Convert to numeric
  var_val <- capture.output(str(var_value, max.level=0))

  list(
    name = var_name,
    type = var_class,
    size = var_size,
    value = var_val
  )
})




env_json <- toJSON(env_list, auto_unbox = TRUE)
cat("${R}\\n")
cat(env_json)
cat("\\n${x}\\n")
      `;console.log(`Wrapped code sent to R:
`,g);let Q=async W=>{var G,J;let F=W.toString();if(console.log("Received data chunk:",F),a+=F,a.includes(x)){console.log("Marker detected in R output"),p.stdout.off("data",Q),p.stderr.off("data",Y);let P="",V="";if(o){try{let b=await k.promises.readFile(y,"utf8");console.log("Read help content:",b),V=b}catch(b){console.error("Failed to read help content:",b),V="Failed to retrieve help content."}let l=(G=this.app.workspace.getLeavesOfType(D)[0])==null?void 0:G.view;l?l.updateHelpContent(V):console.log("RHelpView not found in the workspace")}let H="";if(a.includes(R)){let l=a.split(R);P=l[0].trim(),H=l[1].split(x)[0].trim()}else P=a.split(x)[0].trim();console.log("Result before processing:",P),console.log("Environment data:",H);let q=v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),S=[],re=new RegExp(`${q}(.*)`,"g"),N;for(;(N=re.exec(P))!==null;)if(console.log("Image regex match:",N),N[1]){let l=N[1].trim();S.push(l)}else console.error("No image file name captured in regex match:",N);P=P.replace(new RegExp(`${q}.*`,"g"),"").trim();for(let l of S){let b=L.join(d,l);try{let E=await k.promises.readFile(b),_=`plots/${l}`;this.app.vault.getAbstractFileByPath("plots")||(await this.app.vault.createFolder("plots"),console.log('Created "plots" folder in the vault'));let A=this.app.vault.getAbstractFileByPath(_);A?(await this.app.vault.modifyBinary(A,E),console.log(`Image file updated in vault: ${_}`)):(await this.app.vault.createBinary(_,E),console.log(`Image file created in vault: ${_}`)),S[S.indexOf(l)]=_}catch(E){console.error(`Error handling image file ${l}:`,E)}}let T=[],K=C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),le=new RegExp(`${K}(.*)`,"g"),I;for(;(I=le.exec(P))!==null;)if(I[1]){let l=I[1].trim();T.push(l)}P=P.replace(new RegExp(`${K}.*`,"g"),"").trim();for(let l of T){let b=L.join(d,l);try{let E=await k.promises.readFile(b,"utf8"),_=`widgets/${l}`,Z=this.app.vault.adapter.getBasePath();this.app.vault.getAbstractFileByPath("widgets")||await this.app.vault.createFolder("widgets");let ee=this.app.vault.getAbstractFileByPath(_);ee?await this.app.vault.modify(ee,E):await this.app.vault.create(_,E);let ce=L.join(Z,_),pe=(0,oe.pathToFileURL)(ce).href;T[T.indexOf(l)]=pe}catch(E){console.error(`Error handling widget file ${l}:`,E)}}try{console.log(`Temporary directory ${d} removed`)}catch(l){console.error(`Error removing temporary directory ${d}:`,l)}let X=(J=this.app.workspace.getLeavesOfType($)[0])==null?void 0:J.view;if(X){let l=[];try{l=JSON.parse(H),console.log("Parsed environment variables:",l)}catch(b){console.error("Failed to parse environment data JSON:",b)}X.updateEnvironmentData(n,l)}else console.log("REnvironmentView not found in the workspace");a="",i="",i?r(i.trim()):w({result:P,imagePaths:S,widgetPaths:T,helpContent:V})}},Y=W=>{let F=W.toString();console.error("Received error chunk from R:",F),i+=F};p.stdout.on("data",Q),p.stderr.on("data",Y),p.stdin.write(g+`
`),console.log("Wrapped R code sent to the R process")})}};
