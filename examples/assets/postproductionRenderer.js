import{C as c}from"./web-ifc-api-Df2dhA4n.js";import{S as b}from"./stats.min-GTpOrGrX.js";import{T as p,z as m,m as u}from"./index-DtbylpTq.js";import{C as d,T as f,e as h,x as g,y as x,a as v}from"./index-CC2Loeen.js";import{x as $}from"./index-CQOV9xGw.js";import"./_commonjsHelpers-Cpj98o6Y.js";const k=document.getElementById("container"),t=new d,E=t.get(f),a=E.create();a.scene=new h(t);a.renderer=new $(t,k);a.camera=new g(t);a.scene.three.background=null;t.init();a.camera.controls.setLookAt(12,6,8,0,0,-10);a.scene.setup();const y=t.get(x),r=y.create(a);r.config.color.set(6710886);a.scene.three.background=null;const w=new v(t),S=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),C=await S.arrayBuffer(),A=new Uint8Array(C),G=w.load(A);a.scene.three.add(G);const{postproduction:n}=a.renderer;n.enabled=!0;n.customEffects.excludedMeshes.push(r.three);const s=n.n8ao.configuration,o=new b;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";a.renderer.onBeforeUpdate.add(()=>o.begin());a.renderer.onAfterUpdate.add(()=>o.end());p.init();const l=m.create(()=>u`
  <bim-panel active label="Postproduction Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Gamma">
        <bim-checkbox checked label="Gamma Correction"
          @change="${({target:e})=>{n.setPasses({gamma:e.value})}}">
        </bim-checkbox>
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Custom effects" >
        <bim-checkbox checked label="Custom effects"
          @change="${({target:e})=>{n.setPasses({custom:e.value})}}">
        </bim-checkbox>    
        
        <bim-checkbox checked label="Gamma Correction"
          @change="${({target:e})=>{n.customEffects.glossEnabled=e.value}}">
        </bim-checkbox>   
      
        <bim-number-input 
          slider step="0.01" label="Opacity" 
          value="${n.customEffects.opacity}" min="0" max="1"
          @change="${({target:e})=>{n.customEffects.opacity=e.value}}">
        </bim-number-input>  
            
        <bim-number-input 
          slider step="0.1" label="Tolerance" 
          value="${n.customEffects.tolerance}" min="0" max="6"
          @change="${({target:e})=>{n.customEffects.tolerance=e.value}}">
        </bim-number-input> 
                      
        <bim-color-input label="Line color" 
          @input="${({target:e})=>{const i=new c(e.value.color);n.customEffects.lineColor=i.getHex()}}">
        </bim-color-input>  
      
        <bim-number-input 
          slider label="Gloss exponent" step="0.1" 
          value="${n.customEffects.glossExponent}" min="0" max="5"
          @change="${({target:e})=>{n.customEffects.glossExponent=e.value}}">
        </bim-number-input>    
           
        <bim-number-input 
          slider label="Max gloss" step="0.05" 
          value="${n.customEffects.maxGloss}" min="-2" max="2"
          @change="${({target:e})=>{n.customEffects.maxGloss=e.value}}">
        </bim-number-input>  
                  
        <bim-number-input 
          slider label="Min gloss" step="0.05" 
          value="${n.customEffects.minGloss}" min="-2" max="2"
          @change="${({target:e})=>{n.customEffects.minGloss=e.value}}">
        </bim-number-input> 
        
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Ambient Oclussion">
      
        <bim-checkbox label="AO enabled"
          @change="${({target:e})=>{n.setPasses({ao:e.value})}}">
        </bim-checkbox>  
                
        <bim-checkbox checked label="Half resolution"
          @change="${({target:e})=>{s.halfRes=e.value}}">
        </bim-checkbox>  
                      
        <bim-checkbox label="Screen space radius"
          @change="${({target:e})=>{s.screenSpaceRadius=e.value}}">
        </bim-checkbox>
        
                              
        <bim-color-input label="AO color" 
          @input="${({target:e})=>{const i=new c(e.value.color);s.color.r=i.r,s.color.g=i.g,s.color.b=i.b}}">
        </bim-color-input>     
        
        <bim-number-input 
          slider label="AO Samples" step="1" 
          value="${s.aoSamples}" min="1" max="16"
          @change="${({target:e})=>{s.aoSamples=e.value}}">
        </bim-number-input>    
            
        <bim-number-input 
          slider label="Denoise Samples" step="1" 
          value="${s.denoiseSamples}" min="1" max="16"
          @change="${({target:e})=>{s.denoiseSamples=e.value}}">
        </bim-number-input>   
                  
        <bim-number-input 
          slider label="Denoise Radius" step="1" 
          value="${s.denoiseRadius}" min="0" max="100"
          @change="${({target:e})=>{s.denoiseRadius=e.value}}">
        </bim-number-input>   
                       
        <bim-number-input 
          slider label="AO Radius" step="1" 
          value="${s.aoRadius}" min="0" max="16"
          @change="${({target:e})=>{s.aoRadius=e.value}}">
        </bim-number-input>  
                              
        <bim-number-input 
          slider label="Distance falloff" step="1" 
          value="${s.distanceFalloff}" min="0" max="16"
          @change="${({target:e})=>{s.distanceFalloff=e.value}}">
        </bim-number-input> 
                                      
        <bim-number-input 
          slider label="Intensity" step="1" 
          value="${s.intensity}" min="0" max="16"
          @change="${({target:e})=>{s.intensity=e.value}}">
        </bim-number-input> 
        
      </bim-panel-section>
      
    </bim-panel>
    `);document.body.append(l);const R=m.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{l.classList.contains("options-menu-visible")?l.classList.remove("options-menu-visible"):l.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(R);
